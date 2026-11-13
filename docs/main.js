/* 4chan Sounds Player — documentation site behaviour. No dependencies. */
(function () {
  'use strict';

  var root = document.documentElement;

  /* ---------- Theme toggle ---------- */

  function storedTheme() {
    try { return localStorage.getItem('fcsp-docs-theme'); } catch (err) { return null; }
  }
  function storeTheme(value) {
    try { localStorage.setItem('fcsp-docs-theme', value); } catch (err) { /* private mode */ }
  }
  function systemDark() {
    return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
  }

  var saved = storedTheme();
  if (saved === 'light' || saved === 'dark') {
    root.setAttribute('data-theme', saved);
  }

  var themeBtn = document.querySelector('.theme-toggle');
  if (themeBtn) {
    themeBtn.addEventListener('click', function () {
      var current = root.getAttribute('data-theme') || (systemDark() ? 'dark' : 'light');
      var next = current === 'dark' ? 'light' : 'dark';
      root.setAttribute('data-theme', next);
      storeTheme(next);
    });
  }

  /* ---------- Mobile navigation drawer ---------- */

  var menuBtn = document.querySelector('.menu-btn');
  var scrim = document.querySelector('.scrim');
  function setNav(open) {
    document.body.classList.toggle('nav-open', open);
    menuBtn && menuBtn.setAttribute('aria-expanded', open ? 'true' : 'false');
  }
  menuBtn && menuBtn.addEventListener('click', function () {
    setNav(!document.body.classList.contains('nav-open'));
  });
  scrim && scrim.addEventListener('click', function () { setNav(false); });
  document.querySelectorAll('.nav a').forEach(function (a) {
    a.addEventListener('click', function () { setNav(false); });
  });
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') { setNav(false); }
  });

  /* ---------- Heading anchors ---------- */

  document.querySelectorAll('section.doc h2[id], section.doc h3[id]').forEach(function (h) {
    var a = document.createElement('a');
    a.className = 'anchor';
    a.href = '#' + h.id;
    a.setAttribute('aria-label', 'Link to this section');
    a.textContent = '#';
    h.appendChild(a);
  });

  /* ---------- Scrollspy for the sidebar ---------- */

  var navLinks = Array.prototype.slice.call(document.querySelectorAll('.nav a[href^="#"]'));
  var linkFor = {};
  navLinks.forEach(function (a) { linkFor[a.getAttribute('href').slice(1)] = a; });
  var spyTargets = navLinks
    .map(function (a) { return document.getElementById(a.getAttribute('href').slice(1)); })
    .filter(Boolean);

  function updateSpy() {
    var offset = 110;
    var current = spyTargets[0];
    for (var i = 0; i < spyTargets.length; i++) {
      if (spyTargets[i].getBoundingClientRect().top - offset <= 0) {
        current = spyTargets[i];
      } else {
        break;
      }
    }
    navLinks.forEach(function (a) { a.classList.remove('active'); });
    if (current && linkFor[current.id]) {
      var link = linkFor[current.id];
      link.classList.add('active');
      keepInView(link);
      // Also highlight the parent section link for nested entries.
      var parentList = link.closest('ul ul');
      var parentLink = parentList && parentList.parentElement.querySelector(':scope > a');
      parentLink && parentLink.classList.add('active');
    }
  }

  // Scroll the sidebar (not the page) so the active link stays visible.
  var sidebar = document.querySelector('.sidebar');
  function keepInView(link) {
    if (!sidebar || sidebar.scrollHeight <= sidebar.clientHeight) { return; }
    var top = link.getBoundingClientRect().top - sidebar.getBoundingClientRect().top + sidebar.scrollTop;
    if (top < sidebar.scrollTop + 60 || top > sidebar.scrollTop + sidebar.clientHeight - 60) {
      sidebar.scrollTop = top - sidebar.clientHeight / 3;
    }
  }

  var backToTop = document.querySelector('.back-to-top');
  var ticking = false;
  window.addEventListener('scroll', function () {
    if (ticking) { return; }
    ticking = true;
    window.requestAnimationFrame(function () {
      updateSpy();
      backToTop && backToTop.classList.toggle('show', window.scrollY > 900);
      ticking = false;
    });
  }, { passive: true });
  updateSpy();

  /* ---------- Search ---------- */

  var input = document.getElementById('doc-search');
  var results = document.getElementById('search-results');

  function textOf(el) {
    return el ? (el.textContent || '').replace(/\s+/g, ' ').trim() : '';
  }

  // Give template-token and API table rows an id so they can be linked to and searched.
  document.querySelectorAll('#themes tr, #api tr').forEach(function (tr) {
    var code = tr.querySelector('td:first-child code');
    if (!tr.id && code) {
      tr.id = 'ref-' + textOf(code).toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
      tr.setAttribute('data-ref', '');
    }
  });

  // Index section headings and every documented entry (settings, fields, colors, tokens).
  var index = [];
  var seen = {};
  document.querySelectorAll('section.doc').forEach(function (section) {
    var sectionTitle = textOf(section.querySelector('h2')).replace(/#$/, '');
    section.querySelectorAll('h2[id], h3[id], .entry[id], tr[data-setting], tr[data-ref]').forEach(function (el) {
      if (seen[el.id]) { return; }
      seen[el.id] = true;
      var isRow = el.tagName === 'TR';
      var heading = el.matches('.entry') ? el.querySelector('h4, h5') : isRow ? el.querySelector('td') : el;
      var title = textOf(heading).replace(/#$/, '').trim();
      var subsection = isRow && el.closest('table') && findPrevHeading(el.closest('.table-wrap'));
      var context = el.getAttribute('data-context') || (subsection ? sectionTitle + ' › ' + subsection : sectionTitle);
      index.push({
        id: el.id,
        title: title,
        context: el.tagName === 'H2' ? 'Section' : context,
        haystack: (title + ' ' + (el.getAttribute('data-setting') || '') + ' ' + (el.getAttribute('data-keywords') || '') + ' ' + context).toLowerCase(),
        body: el.matches('.entry, tr') ? textOf(el).toLowerCase() : ''
      });
    });
  });

  function findPrevHeading(el) {
    while (el && (el = el.previousElementSibling)) {
      if (/^H[2-4]$/.test(el.tagName)) { return textOf(el).replace(/#$/, ''); }
    }
    return '';
  }

  var activeIdx = -1;

  function escapeHTML(s) {
    return s.replace(/[&<>"']/g, function (c) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c];
    });
  }

  function search(q) {
    q = q.trim().toLowerCase();
    if (!q) { return []; }
    var words = q.split(/\s+/);
    return index
      .map(function (item) {
        var score = 0;
        var all = words.every(function (w) {
          if (item.title.toLowerCase().indexOf(w) !== -1) { score += 10; return true; }
          if (item.haystack.indexOf(w) !== -1) { score += 5; return true; }
          if (item.body.indexOf(w) !== -1) { score += 1; return true; }
          return false;
        });
        if (item.title.toLowerCase().indexOf(q) === 0) { score += 15; }
        return all ? { item: item, score: score } : null;
      })
      .filter(Boolean)
      .sort(function (a, b) { return b.score - a.score; })
      .slice(0, 12)
      .map(function (r) { return r.item; });
  }

  function render(list) {
    activeIdx = list.length ? 0 : -1;
    if (!input.value.trim()) {
      results.classList.remove('open');
      results.innerHTML = '';
      input.setAttribute('aria-expanded', 'false');
      return;
    }
    results.innerHTML = list.length
      ? list.map(function (item, i) {
        return '<a href="#' + escapeHTML(item.id) + '" role="option"' + (i === 0 ? ' class="active"' : '') + '>'
          + escapeHTML(item.title) + '<small>' + escapeHTML(item.context) + '</small></a>';
      }).join('')
      : '<div class="empty">No matches. Try a setting name like “repeat” or “filters”.</div>';
    results.classList.add('open');
    input.setAttribute('aria-expanded', 'true');
  }

  function highlight(i) {
    var links = results.querySelectorAll('a');
    if (!links.length) { return; }
    activeIdx = (i + links.length) % links.length;
    links.forEach(function (a, j) { a.classList.toggle('active', j === activeIdx); });
    links[activeIdx].scrollIntoView({ block: 'nearest' });
  }

  function close() {
    results.classList.remove('open');
    input.setAttribute('aria-expanded', 'false');
  }

  if (input && results) {
    input.addEventListener('input', function () { render(search(input.value)); });
    input.addEventListener('focus', function () { input.value.trim() && render(search(input.value)); });
    input.addEventListener('keydown', function (e) {
      if (e.key === 'ArrowDown') { e.preventDefault(); highlight(activeIdx + 1); }
      else if (e.key === 'ArrowUp') { e.preventDefault(); highlight(activeIdx - 1); }
      else if (e.key === 'Enter') {
        var link = results.querySelectorAll('a')[activeIdx];
        if (link) { e.preventDefault(); link.click(); }
      } else if (e.key === 'Escape') { close(); input.blur(); }
    });
    results.addEventListener('click', function (e) {
      if (e.target.closest('a')) { close(); setNav(false); }
    });
    document.addEventListener('click', function (e) {
      if (!e.target.closest('.search')) { close(); }
    });
    // "/" focuses the search box, like many docs sites.
    document.addEventListener('keydown', function (e) {
      if (e.key === '/' && !/^(INPUT|TEXTAREA|SELECT)$/.test(document.activeElement.nodeName)) {
        e.preventDefault();
        if (window.matchMedia('(max-width: 960px)').matches) { setNav(true); }
        input.focus();
      }
    });
  }

  /* ---------- Copy buttons on code blocks ---------- */

  function copyText(text) {
    if (navigator.clipboard && window.isSecureContext) {
      return navigator.clipboard.writeText(text);
    }
    return new Promise(function (resolve, reject) {
      var ta = document.createElement('textarea');
      ta.value = text;
      ta.style.position = 'fixed';
      ta.style.opacity = '0';
      document.body.appendChild(ta);
      ta.select();
      try { document.execCommand('copy') ? resolve() : reject(); } catch (err) { reject(err); }
      document.body.removeChild(ta);
    });
  }

  function flash(btn, ok) {
    var original = btn.getAttribute('data-label') || btn.textContent;
    btn.setAttribute('data-label', original);
    btn.textContent = ok ? 'Copied' : 'Press Ctrl+C';
    btn.classList.toggle('done', ok);
    setTimeout(function () { btn.textContent = original; btn.classList.remove('done'); }, 1600);
  }

  document.querySelectorAll('pre').forEach(function (pre) {
    var wrap = document.createElement('div');
    wrap.className = 'code-block';
    pre.parentNode.insertBefore(wrap, pre);
    wrap.appendChild(pre);
    var btn = document.createElement('button');
    btn.type = 'button';
    btn.className = 'copy-btn';
    btn.textContent = 'Copy';
    btn.addEventListener('click', function () {
      copyText(pre.innerText.replace(/\n$/, '')).then(function () { flash(btn, true); }, function () { flash(btn, false); });
    });
    wrap.appendChild(btn);
  });

  /* ---------- Sound filename builder ---------- */

  // Mirrors tools/create.js: the protocol is stripped, the rest is URI-encoded,
  // and the name portion is limited to 218 characters.
  var MAX = 218;
  var nameIn = document.getElementById('builder-name');
  var urlIn = document.getElementById('builder-url');
  var out = document.getElementById('builder-output');
  var count = document.getElementById('builder-count');
  var copyBuilt = document.getElementById('builder-copy');

  function build() {
    var names = nameIn.value;
    var urls = urlIn.value.split(',').map(function (s) { return s.trim(); }).filter(Boolean);
    if (!urls.length) {
      out.textContent = 'Enter a sound URL to see the filename.';
      out.classList.add('muted');
      count.textContent = '';
      return '';
    }
    var nameList = urls.length > 1 ? names.split(',').map(function (s) { return s.trim(); }) : [names.trim()];
    var filename = urls.map(function (u, i) {
      return (nameList[i] || '') + '[sound=' + encodeURIComponent(u.replace(/^(https?:)?\/\//, '')) + ']';
    }).join('');
    out.textContent = filename;
    out.classList.remove('muted');
    var len = filename.length;
    count.innerHTML = len > MAX
      ? '<span class="over">' + len + ' / ' + MAX + ' characters: over the limit the Create tool allows. Shorten the name or use fewer sounds.</span>'
      : len + ' / ' + MAX + ' characters, plus the image’s own extension';
    return filename;
  }

  if (nameIn && urlIn && out) {
    nameIn.addEventListener('input', build);
    urlIn.addEventListener('input', build);
    build();
    copyBuilt && copyBuilt.addEventListener('click', function () {
      var value = build();
      if (!value) { return; }
      copyText(value).then(function () { flash(copyBuilt, true); }, function () { flash(copyBuilt, false); });
    });
  }
})();
