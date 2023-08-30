/* eslint-disable */
(function () {
    var scriptUrl = 'https://open.spotifycdn.com/cdn/build/embed-iframe-api-v1.42535431.js';
    var host = 'https://open.spotify.com';
    try {
      var ttPolicy = window.trustedTypes.createPolicy('spotify-embed-api', {
        createScriptURL: function (x) {
          return x;
        },
      });
      scriptUrl = ttPolicy.createScriptURL(scriptUrl);
    } catch (e) {}
  
    if (!window.SpotifyIframeConfig) {
      window.SpotifyIframeConfig = {};
    }
    SpotifyIframeConfig.host = host;
  
    if (SpotifyIframeConfig.loading) {
      console.warn('The Spotify Iframe API has already been initialized.');
      return;
    }
    SpotifyIframeConfig.loading = 1;
  
    var a = document.createElement('script');
    a.type = 'text/javascript';
    a.id = 'spotify-iframeapi-script';
    a.src = scriptUrl;
    a.async = true;
    var c = document.currentScript;
    if (c) {
      var n = c.nonce || c.getAttribute('nonce');
      if (n) a.setAttribute('nonce', n);
    }
    var b = document.getElementsByTagName('script')[0];
    b.parentNode.insertBefore(a, b);
  })();