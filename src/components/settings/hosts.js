// The form data must send the file somewhere: a "$file" value in a JSON object.
function validData(data) {
  return !!data && typeof data === 'object' && !Array.isArray(data) && Object.values(data).includes('$file');
}

// A response match must compile and capture the link.
function validMatch(value) {
  try {
    return new RegExp(`${value}|`).exec('').length > 1;
  } catch (err) {
    return false;
  }
}

function validURL(value) {
  try {
    // Regex was missing the `:` so it never matched a real protocol — it would
    // double-prefix every URL with https:// and the URL constructor would throw.
    new URL(value.replace(/%s/, 'sound').replace(/^(https?:\/\/)?/, 'https://'));
    return true;
  } catch (err) {
    return false;
  }
}

module.exports = {
  template: require('./templates/host_input.tpl'),

  fields: {
    name: 'Name',
    url: 'URL',
    responsePath: 'Response Path',
    responseMatch: 'Response Match',
    soundUrl: 'File URL Format'
  },

  parse(newValue, hosts, e) {
    const container = e.currentTarget.closest(`.${ns}-host-input`);
    let name = container.getAttribute('data-host-name');
    const changedField = e.currentTarget.getAttribute('name');
    // Settings save on every focusout: leaving a field without editing it isn't a change.
    // (Writing it back anyway, as name or an empty string, made a built-in host a stored
    // custom copy.)
    const current = hosts[name] || {};
    const shown = changedField === 'name' ? name
      : changedField === 'data' ? JSON.stringify(current.data, null, 4)
        : changedField === 'headers' ? (current.headers ? JSON.stringify(current.headers, null, 4) : '')
          : current[changedField] == null ? '' : String(current[changedField]);
    if (newValue === shown) {
      return hosts;
    }
    hosts = { ...hosts };
    let host = hosts[name] = { ...hosts[name] };

    try {
      // If the name was changed then reassign in hosts and update the data-host-name attribute.
      if (changedField === 'name' && newValue !== name) {
        if (!newValue || hosts[newValue]) {
          throw new PlayerError('A unique name for the host is required.', 'warning');
        }
        container.setAttribute('data-host-name', newValue);
        hosts[newValue] = host;
        // A built-in host has to stay as null under its old name, or the next load mixes
        // the default back in next to the renamed copy.
        if (Player.settings.findDefault('uploadHosts').default[name]) {
          hosts[name] = null;
        } else {
          delete hosts[name];
        }
        // Keep the default upload host pointing at the renamed host.
        Player.config.defaultUploadHost === name && Player.set('defaultUploadHost', newValue);
        name = newValue;
      }

      // Validate URL
      if ((changedField === 'url' || changedField === 'soundUrl' && newValue) && !validURL(newValue)) {
        throw new PlayerError('The value must be a valid URL.', 'warning');
      }
      // Uploads go to the URL as given, so store it with its scheme: without one it was read
      // relative to the page.
      if (changedField === 'url' && !/^https?:\/\//i.test(newValue)) {
        newValue = `https://${newValue.replace(/^\/\//, '')}`;
        e.currentTarget.value = newValue;
      }
      if (changedField === 'responseMatch' && newValue && !validMatch(newValue)) {
        throw new PlayerError('The response match must be a regular expression with a capture group, ( ), around the link.', 'warning');
      }

      // Parse the data
      if (changedField === 'data') {
        try {
          newValue = JSON.parse(newValue);
        } catch (err) {
          throw new PlayerError('The data must be valid JSON.', 'warning');
        }
        if (!validData(newValue)) {
          throw new PlayerError('The data must be a JSON object with "$file" as the value of the file\'s field.', 'warning');
        }
      }

      if (changedField === 'headers') {
        try {
          newValue = newValue ? JSON.parse(newValue) : undefined;
        } catch (err) {
          throw new PlayerError('The headers must be valid JSON.', 'warning');
        }
      }
    } catch (err) {
      host.invalid = true;
      container.classList.add('invalid');
      throw err;
    }

    // The name is the key, not a field; an emptied optional field is left out.
    if (changedField !== 'name') {
      if (newValue === undefined || newValue === '') {
        delete host[changedField];
      } else {
        host[changedField] = newValue;
      }
    }

    try {
      const soundUrlValue = container.querySelector('[name=soundUrl]').value;
      const headersValue = container.querySelector('[name=headers]').value;
      const matchValue = container.querySelector('[name=responseMatch]').value;
      if (name
				&& validData(JSON.parse(container.querySelector('[name=data]').value))
				&& validURL(container.querySelector('[name=url]').value)
				&& (!matchValue || validMatch(matchValue))
				&& (!soundUrlValue || validURL(soundUrlValue))
				&& (!headersValue || JSON.parse(headersValue))) {

        delete host.invalid;
        container.classList.remove('invalid');
      }
    } catch (err) {
      // leave it invalid
    }

    return hosts;
  },

  add() {
    let i = '',
      name = 'New Host';
    while (Player.config.uploadHosts[`${name}${i}`]) {
      i = ` ${++i}`;
    }
    const hosts = {
      [`${name}${i}`]: { invalid: true, data: { file: '$file' } },
      ...Player.config.uploadHosts
    };
    Player.settings.set('uploadHosts', hosts, { bypassValidation: true, silent: true });
  },

  remove(e) {
    const hosts = Player.config.uploadHosts;
    const container = e.currentTarget.closest(`.${ns}-host-input`);
    const name = container.getAttribute('data-host-name');
    // For hosts in the defaults set null so we know to not include them on load
    if (Player.settings.findDefault('uploadHosts').default[name]) {
      hosts[name] = null;
    } else {
      delete hosts[name];
    }
    container.parentNode.removeChild(container);
    Player.settings.set('uploadHosts', hosts, { bypassValidation: true, bypassRender: true });
  },

  setDefault(_new, _current, e) {
    const selected = e.currentTarget.closest(`.${ns}-host-input`).getAttribute('data-host-name');
    if (selected === Player.config.defaultUploadHost) {
      return selected;
    }

    Object.keys(Player.config.uploadHosts).forEach(name => {
      const checkbox = Player.$(`.${ns}-host-input[data-host-name="${CSS.escape(name)}"] input[data-property="defaultUploadHost"]`);
      checkbox && (checkbox.checked = name === selected);
    });
    return selected;
  },

  restoreDefaults() {
    Object.assign(Player.config.uploadHosts, _.clone(Player.settings.findDefault('uploadHosts').default));
    Player.set('uploadHosts', Player.config.uploadHosts, { bypassValidation: true });
  }
};
