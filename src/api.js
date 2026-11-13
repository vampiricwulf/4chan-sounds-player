const cache = {};

module.exports = {
  get
};

// GM.xmlHttpRequest hands back the response headers as one raw string, not an object.
function getHeader(rawHeaders, name) {
  const match = new RegExp(`^${name}:[ \\t]*(.*)$`, 'im').exec(rawHeaders || '');
  return match ? match[1].trim() : undefined;
}

async function get(url) {
  return new Promise(function (resolve, reject) {
    const headers = {};
    if (cache[url] && cache[url].lastModified) {
      headers['If-Modified-Since'] = cache[url].lastModified;
    }
    GM.xmlHttpRequest({
      method: 'GET',
      url,
      headers,
      responseType: 'json',
      // A request that never answers left the threads view loading, with no way to retry.
      timeout: 30000,
      ontimeout: () => reject(new Error(`Request for ${url} timed out.`)),
      onabort: () => reject(new Error(`Request for ${url} was aborted.`)),
      onload: response => {
        if (response.status === 304 && cache[url]) {
          return resolve(cache[url].response);
        }
        // Reject HTTP errors so callers report them instead of reading a null body.
        if (response.status < 200 || response.status >= 300) {
          return reject(new Error(`Request for ${url} failed with status ${response.status}.`));
        }
        cache[url] = { lastModified: getHeader(response.responseHeaders, 'last-modified'), response: response.response };
        resolve(response.response);
      },
      onerror: reject
    });
  });
}
