// Pure, side-effect-free parser for the player's @-attribute handler strings.
// Compiles the common `method(args)` shapes into a dispatcher WITHOUT eval /
// new Function, so those handlers work under CSPs that lack 'unsafe-eval'
// (e.g. some archives). Returns null for anything it can't safely parse — the
// caller then falls back to new Function. Kept Player-free so it's unit-testable.

// Split a comma-separated arg list at top level (respecting quotes / brackets /
// braces / parens). Returns an array of trimmed sources, or null if unbalanced.
function splitArgs(src) {
  src = src.trim();
  if (src === '') {
    return [];
  }
  const out = [];
  let depth = 0;
  let quote = null;
  let cur = '';
  for (let i = 0; i < src.length; i++) {
    const c = src[i];
    if (quote) {
      cur += c;
      if (c === '\\') {
        cur += src[++i] || '';
      } else if (c === quote) {
        quote = null;
      }
    } else if (c === '"' || c === '\'') {
      quote = c;
      cur += c;
    } else if (c === '{' || c === '[' || c === '(') {
      depth++;
      cur += c;
    } else if (c === '}' || c === ']' || c === ')') {
      depth--;
      cur += c;
    } else if (c === ',' && depth === 0) {
      out.push(cur.trim());
      cur = '';
    } else {
      cur += c;
    }
  }
  if (quote || depth !== 0) {
    return null;
  }
  out.push(cur.trim());
  return out;
}

// Un-escape a single/double quoted string literal to its value, or null if malformed.
// Handles exactly what _.escAttr(x, true) + HTML attribute decoding produce: \" \\ \n \r.
function parseString(src) {
  const q = src[0];
  if ((q !== '"' && q !== '\'') || src.length < 2 || src[src.length - 1] !== q) {
    return null;
  }
  let out = '';
  for (let i = 1; i < src.length - 1; i++) {
    const c = src[i];
    if (c === '\\') {
      const n = src[++i];
      out += n === 'n' ? '\n' : n === 't' ? '\t' : n === 'r' ? '\r' : n;
    } else if (c === q) {
      return null; // unescaped closing quote before the end — not a single literal
    } else {
      out += c;
    }
  }
  return out;
}

// Index of the first top-level colon (object key/value separator), or -1.
function topColon(src) {
  let depth = 0;
  let quote = null;
  for (let i = 0; i < src.length; i++) {
    const c = src[i];
    if (quote) {
      if (c === '\\') {
        i++;
      } else if (c === quote) {
        quote = null;
      }
    } else if (c === '"' || c === '\'') {
      quote = c;
    } else if (c === '{' || c === '[' || c === '(') {
      depth++;
    } else if (c === '}' || c === ']' || c === ')') {
      depth--;
    } else if (c === ':' && depth === 0) {
      return i;
    }
  }
  return -1;
}

// Parse a { key: literal, ... } object of literal values only (no $event), or null.
function parseObject(src) {
  const inner = src.slice(1, -1).trim();
  if (inner === '') {
    return {};
  }
  const parts = splitArgs(inner);
  if (parts === null) {
    return null;
  }
  const obj = {};
  for (const part of parts) {
    const ci = topColon(part);
    if (ci === -1) {
      return null;
    }
    let key = part.slice(0, ci).trim();
    const valSrc = part.slice(ci + 1).trim();
    if (!/^[\w$]+$/.test(key)) {
      key = parseString(key);
      if (key === null) {
        return null;
      }
    }
    if (valSrc.indexOf('$event') !== -1) {
      return null; // object values must be plain literals
    }
    const ev = compileArg(valSrc);
    if (ev === null) {
      return null;
    }
    obj[key] = ev();
  }
  return obj;
}

// Compile one argument source into ($event) => value, or null if unsupported.
function compileArg(src) {
  src = src.trim();
  if (src === '$event') {
    return $event => $event;
  }
  const chain = src.match(/^\$event((?:\.[\w$]+)+)$/);
  if (chain) {
    const props = chain[1].slice(1).split('.');
    return $event => props.reduce((o, p) => (o == null ? o : o[p]), $event);
  }
  if (src[0] === '"' || src[0] === '\'') {
    const val = parseString(src);
    return val === null ? null : () => val;
  }
  if (/^-?\d+(\.\d+)?$/.test(src)) {
    const n = +src;
    return () => n;
  }
  if (src === 'true') {
    return () => true;
  }
  if (src === 'false') {
    return () => false;
  }
  if (src === 'null') {
    return () => null;
  }
  if (src === 'undefined') {
    return () => undefined;
  }
  if (src[0] === '{' && src[src.length - 1] === '}') {
    const tpl = parseObject(src);
    return tpl === null ? null : () => Object.assign({}, tpl);
  }
  return null;
}

// Compile `path(args)` into an ($event) => result dispatcher, or null if the action
// isn't a single simple call or uses an arg form we don't support. `resolve(path)`
// returns { fn, scope } or null (injected so this module stays Player-free).
function compileAction(action, resolve) {
  const m = action.trim().match(/^([\w$]+(?:\.[\w$]+)*)\s*\(([\s\S]*)\)$/);
  if (!m) {
    return null;
  }
  const resolved = resolve(m[1]);
  if (!resolved || typeof resolved.fn !== 'function') {
    return null;
  }
  const argSrcs = splitArgs(m[2]);
  if (argSrcs === null) {
    return null;
  }
  const argFns = [];
  for (const argSrc of argSrcs) {
    const fn = compileArg(argSrc);
    if (fn === null) {
      return null;
    }
    argFns.push(fn);
  }
  return function ($event) {
    return resolved.fn.apply(resolved.scope, argFns.map(f => f($event)));
  };
}

module.exports = { compileAction, splitArgs, parseString, parseObject, compileArg, topColon };
