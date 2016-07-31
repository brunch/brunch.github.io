/**
 * Copyright 2016 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

// This generated service worker JavaScript will precache your site's resources.
// The code needs to be saved in a .js file at the top-level of your site, and registered
// from your pages in order to be used. See
// https://github.com/googlechrome/sw-precache/blob/master/demo/app/js/service-worker-registration.js
// for an example of how you can register this script and handle various service worker events.

/* eslint-env worker, serviceworker */
/* eslint-disable indent, no-unused-vars, no-multiple-empty-lines, max-nested-callbacks, space-before-function-paren, quotes, comma-spacing */
'use strict';

var precacheConfig = [["app.css","93a5211876fab064c27f4953e567a73e"],["app.js","d73b776bf8d347bee8595865844579c1"],["compare.html","8a20405c50393bbe5691e88dae9663c7"],["docs/commands","d41d8cd98f00b204e9800998ecf8427e"],["docs/commands.html","253a8f74ebbe47cf517c9a9f8962f96d"],["docs/concepts","d41d8cd98f00b204e9800998ecf8427e"],["docs/concepts.html","bfa99a14561e152188a650e2910fe2c4"],["docs/config","d41d8cd98f00b204e9800998ecf8427e"],["docs/config.html","08838aff72b9d9eefbee375fe70eb4e6"],["docs/deploying","d41d8cd98f00b204e9800998ecf8427e"],["docs/deploying.html","d5ca4cb1ff3efe895425d03f2ab83999"],["docs/faq.html","573c646be802b4eee3dcf7396a18fc07"],["docs/getting-started","d41d8cd98f00b204e9800998ecf8427e"],["docs/getting-started.html","300725d6bbc9cec321c4fe3928906167"],["docs/index.html","a946aafc4256ea1587e1632e7a69e955"],["docs/js-modules-npm.html","4cd35a126da6540071d3e9016e0b6df4"],["docs/npm-modules.html","eeee8187d4130367f737bac0f298f920"],["docs/plugins","d41d8cd98f00b204e9800998ecf8427e"],["docs/plugins.html","d34ee5889396520ddf803889333f9184"],["docs/testing","d41d8cd98f00b204e9800998ecf8427e"],["docs/testing.html","bd8b249cae6f3ad20510baa48d387a62"],["docs/troubleshooting","d41d8cd98f00b204e9800998ecf8427e"],["docs/troubleshooting.html","92c9567af12479f6ccdfc670c24a2716"],["docs/using-modules","d41d8cd98f00b204e9800998ecf8427e"],["docs/using-modules.html","a6a688aea0331b91851ffecb0d6fd76f"],["docs/using-plugins","d41d8cd98f00b204e9800998ecf8427e"],["docs/using-plugins.html","2ab83c1a05df5ca176381b95518f71e4"],["docs/why-brunch","d41d8cd98f00b204e9800998ecf8427e"],["docs/why-brunch.html","aadb573e4ffdb7bfaf0568549c862e95"],["examples","d41d8cd98f00b204e9800998ecf8427e"],["examples.html","d36994cfd572084e61b9a4f19e10cb18"],["images/others/grunt.png","db25190ea3e5599300600de222ac9eb6"],["images/others/gulp.png","9c9b1d2543c0b546dc9960c73e98756f"],["images/screenshots/blimp.png","b6ed678451a39c75f37636423c9c2a10"],["images/screenshots/blossom.png","2833536868a6bd1618dab5a4da982946"],["images/screenshots/chaincal.png","a1ff3cd505c6fe592284be37aded003a"],["images/screenshots/codecombat.png","1d49496f59626d6cb2c320423d64dc3f"],["images/screenshots/colors.png","f1a8f3df01ea974a18bb0e9dfaabb6fe"],["images/screenshots/cozycloud.jpg","dfb8b3ab0e8353e58ebc1c4f7b46f7db"],["images/screenshots/delicious.png","835def82a75da4405b4d59d4f5b371ca"],["images/screenshots/dogkr.jpg","3de204ecfa0990cddadf993afc6189b4"],["images/screenshots/fnd.png","f4f92ea5b6dd1f5a84f092f92e4ba9cc"],["images/screenshots/hackerank.png","ae5369a09cc5505451ef23a06fd8bd69"],["images/screenshots/hopstop.png","dfb0c4c958ffc2f1fdf6194c46577d79"],["images/screenshots/jebbit.png","890273c592849f2c984630db72df8ca9"],["images/screenshots/mazemap.png","9f8b0a9e33cb7ffe3cdc0b212bc53bb0"],["images/screenshots/ostio.png","35e52007769d198246800bd01a7788b0"],["images/screenshots/salon.png","bb83d613f2d41820822ce1d017317cc5"],["images/screenshots/trunkclub.png","3c496986297367fc4a1a18b21f909b48"],["images/screenshots/twitter.png","29c8bd341eca6ea72feeb8218c5bbcef"],["images/svg/brunch-small.svg","cb9f2040e456f9e394a1204e77b8a861"],["images/svg/brunch.svg","cd2b57dc01ecaf3202d200daf5685985"],["images/svg/grunticon.loader.js","7e89eb70db5df2a5496b8bdcc65d7395"],["images/svg/icons.data.png.css","54c4fbbe2308984539cd0e0b76e74740"],["images/svg/icons.data.svg.css","9f1a0737f1e76619332e64ff141f885e"],["images/svg/icons.fallback.css","299071cf51e485ff56b1268524a3939e"],["images/svg/png/brunch-icon-mark.png","242704d5ef9f074fa32b1c8220396235"],["images/svg/png/brunch-logo-napkin.png","68576c3c1f02aaa033240062dcecc618"],["images/svg/png/brunch-logo-web.png","71298f304639a4cbc1afaea9008dbbc5"],["images/svg/preview.html","d063c2baf5d638189d923450ff80b00a"],["images/users/codecombat.png","c7e8aa55a44f6c577f8214f1a20b0d08"],["images/users/fnd.png","a27074b87cd9fc2d26b7811cd981b162"],["images/users/gormz.png","99aa8f234a7f5ad08a95277a99231c55"],["images/users/jebbit.png","163fd3e5c529398c33c017303fdf69a8"],["images/users/jimbeam.png","87af2bc01ffd941f6a2bc68828a44bdc"],["images/users/redbull.png","35b5d84f2035f3454ec1671f7f4323e8"],["images/users/syoss.png","2003d223e554aea6c04c76c6a8f48d88"],["images/users/trunkclub.png","351e5cbd90d4e03f32b0a8fa31d83af4"],["images/users/uber.png","b03f9a1b44f7ec6ac859d5db3e4511ea"],["images/users/ykky.png","2ca2e1b8458d611ad78572d1b162cedd"],["index.html","992d3765aa452dd6c591cedf6c78c7d5"],["plugins","d41d8cd98f00b204e9800998ecf8427e"],["plugins.html","dfbd8e502a07091acd70b5395c51dbbc"],["skeletons","d41d8cd98f00b204e9800998ecf8427e"],["skeletons.html","00a2b8a8a1a419297546c761996fc15b"],["support","d41d8cd98f00b204e9800998ecf8427e"],["support.html","8fe8f39b7d55ddfb407ed253b2d56752"]];
var cacheName = 'sw-precache-v2--' + (self.registration ? self.registration.scope : '');


var ignoreUrlParametersMatching = [/^utm_/];



var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
      url.pathname += index;
    }
    return url.toString();
  };

var createCacheKey = function (originalUrl, paramName, paramValue,
                           dontCacheBustUrlsMatching) {
    // Create a new URL object to avoid modifying originalUrl.
    var url = new URL(originalUrl);

    // If dontCacheBustUrlsMatching is not set, or if we don't have a match,
    // then add in the extra cache-busting URL parameter.
    if (!dontCacheBustUrlsMatching ||
        !(url.toString().match(dontCacheBustUrlsMatching))) {
      url.search += (url.search ? '&' : '') +
        encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
  };

var isPathWhitelisted = function (whitelist, absoluteUrlString) {
    // If the whitelist is empty, then consider all URLs to be whitelisted.
    if (whitelist.length === 0) {
      return true;
    }

    // Otherwise compare each path regex to the path of the URL passed in.
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function(whitelistedPathRegex) {
      return path.match(whitelistedPathRegex);
    });
  };

var stripIgnoredUrlParameters = function (originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);

    url.search = url.search.slice(1) // Exclude initial '?'
      .split('&') // Split into an array of 'key=value' strings
      .map(function(kv) {
        return kv.split('='); // Split each 'key=value' string into a [key, value] array
      })
      .filter(function(kv) {
        return ignoreUrlParametersMatching.every(function(ignoredRegex) {
          return !ignoredRegex.test(kv[0]); // Return true iff the key doesn't match any of the regexes.
        });
      })
      .map(function(kv) {
        return kv.join('='); // Join each [key, value] array into a 'key=value' string
      })
      .join('&'); // Join the array of 'key=value' strings into a string with '&' in between each

    return url.toString();
  };


var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
  precacheConfig.map(function(item) {
    var relativeUrl = item[0];
    var hash = item[1];
    var absoluteUrl = new URL(relativeUrl, self.location);
    var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
    return [absoluteUrl.toString(), cacheKey];
  })
);

function setOfCachedUrls(cache) {
  return cache.keys().then(function(requests) {
    return requests.map(function(request) {
      return request.url;
    });
  }).then(function(urls) {
    return new Set(urls);
  });
}

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return setOfCachedUrls(cache).then(function(cachedUrls) {
        return Promise.all(
          Array.from(urlsToCacheKeys.values()).map(function(cacheKey) {
            // If we don't have a key matching url in the cache already, add it.
            if (!cachedUrls.has(cacheKey)) {
              return cache.add(new Request(cacheKey, {credentials: 'same-origin'}));
            }
          })
        );
      });
    }).then(function() {
      // Force the SW to transition from installing -> active state
      return self.skipWaiting();
    })
  );
});

self.addEventListener('activate', function(event) {
  var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return cache.keys().then(function(existingRequests) {
        return Promise.all(
          existingRequests.map(function(existingRequest) {
            if (!setOfExpectedUrls.has(existingRequest.url)) {
              return cache.delete(existingRequest);
            }
          })
        );
      });
    }).then(function() {
      return self.clients.claim();
    })
  );
});


self.addEventListener('fetch', function(event) {
  if (event.request.method === 'GET') {
    // Should we call event.respondWith() inside this fetch event handler?
    // This needs to be determined synchronously, which will give other fetch
    // handlers a chance to handle the request if need be.
    var shouldRespond;

    // First, remove all the ignored parameter and see if we have that URL
    // in our cache. If so, great! shouldRespond will be true.
    var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
    shouldRespond = urlsToCacheKeys.has(url);

    // If shouldRespond is false, check again, this time with 'index.html'
    // (or whatever the directoryIndex option is set to) at the end.
    var directoryIndex = 'index.html';
    if (!shouldRespond && directoryIndex) {
      url = addDirectoryIndex(url, directoryIndex);
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond is still false, check to see if this is a navigation
    // request, and if so, whether the URL matches navigateFallbackWhitelist.
    var navigateFallback = '';
    if (!shouldRespond &&
        navigateFallback &&
        (event.request.mode === 'navigate') &&
        isPathWhitelisted([], event.request.url)) {
      url = new URL(navigateFallback, self.location).toString();
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond was set to true at any point, then call
    // event.respondWith(), using the appropriate cache key.
    if (shouldRespond) {
      event.respondWith(
        caches.open(cacheName).then(function(cache) {
          return cache.match(urlsToCacheKeys.get(url));
        }).catch(function(e) {
          // Fall back to just fetch()ing the request if some unexpected error
          // prevented the cached response from being valid.
          console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
          return fetch(event.request);
        })
      );
    }
  }
});







