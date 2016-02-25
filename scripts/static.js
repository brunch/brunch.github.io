(function() {
  'use strict';

  var globals = typeof window === 'undefined' ? global : window;
  if (typeof globals.require === 'function') return;

  var modules = {};
  var cache = {};
  var aliases = {};
  var has = ({}).hasOwnProperty;

  var unalias = function(alias, loaderPath) {
    var result = aliases[alias] || aliases[alias + '/index.js'];
    return result || alias;
  };

  var _reg = /^\.\.?(\/|$)/;
  var expand = function(root, name) {
    var results = [], part;
    var parts = (_reg.test(name) ? root + '/' + name : name).split('/');
    for (var i = 0, length = parts.length; i < length; i++) {
      part = parts[i];
      if (part === '..') {
        results.pop();
      } else if (part !== '.' && part !== '') {
        results.push(part);
      }
    }
    return results.join('/');
  };

  var dirname = function(path) {
    return path.split('/').slice(0, -1).join('/');
  };

  var localRequire = function(path) {
    return function expanded(name) {
      var absolute = expand(dirname(path), name);
      return globals.require(absolute, path);
    };
  };

  var initModule = function(name, definition) {
    var module = {id: name, exports: {}};
    cache[name] = module;
    definition(module.exports, localRequire(name), module);
    return module.exports;
  };

  var require = function(name, loaderPath) {
    if (loaderPath == null) loaderPath = '/';
    var path = unalias(name, loaderPath);

    if (has.call(cache, path)) return cache[path].exports;
    if (has.call(modules, path)) return initModule(path, modules[path]);

    var dirIndex = expand(path, './index');
    if (has.call(cache, dirIndex)) return cache[dirIndex].exports;
    if (has.call(modules, dirIndex)) return initModule(dirIndex, modules[dirIndex]);

    throw new Error('Cannot find module "' + name + '" from ' + '"' + loaderPath + '"');
  };

  require.alias = function(from, to) {
    aliases[to] = from;
  };

  require.register = require.define = function(bundle, fn) {
    if (typeof bundle === 'object') {
      for (var key in bundle) {
        if (has.call(bundle, key)) {
          require.register(key, bundle[key]);
        }
      }
    } else {
      modules[bundle] = fn;
    }
  };

  require.list = function() {
    var result = [];
    for (var item in modules) {
      if (has.call(modules, item)) {
        result.push(item);
      }
    }
    return result;
  };

  require.brunch = true;
  require._cache = cache;
  globals.require = require;
})();
require.register("compare", function(exports, require, module) {
var __templateData = function template(locals) {
var buf = [];
var jade_mixins = {};
var jade_interp;
;var locals_for_with = (locals || {});(function (filename, nav, undefined) {
buf.push("<!DOCTYPE html><html><head><meta charset=\"utf-8\"><meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge,chrome=1\"><title>Brunch - ultra-fast HTML5 build tool</title><meta name=\"description\" content=\"Brunch builds, lints, compiles, concatenates and shrinks your HTML5 app in an ultra-simple way. No more Grunt / Gulp mess.\"><meta name=\"viewport\" content=\"width=device-width, initial-scale=1\"><link rel=\"shortcut icon\" type=\"image/x-icon\" href=\"/favicon.ico\"><link rel=\"stylesheet\" href=\"styles/app.css\"><link rel=\"publisher\" href=\"https://plus.google.com/+PaulMillerLi\"><!--[if lt IE 9]>\n<script src=\"//html5shiv.googlecode.com/svn/trunk/html5.js\"></script>\n<![endif]--><script>/*! grunt-grunticon Stylesheet Loader - v2.1.6 | https://github.com/filamentgroup/grunticon | (c) 2015 Scott Jehl, Filament Group, Inc. | MIT license. */\n\n!function(){function e(e,n,t){\"use strict\";var o=window.document.createElement(\"link\"),a=n||window.document.getElementsByTagName(\"script\")[0],i=window.document.styleSheets;return o.rel=\"stylesheet\",o.href=e,o.media=\"only x\",a.parentNode.insertBefore(o,a),o.onloadcssdefined=function(e){for(var n,t=0;t<i.length;t++)i[t].href&&i[t].href===o.href&&(n=!0);n?e():setTimeout(function(){o.onloadcssdefined(e)})},o.onloadcssdefined(function(){o.media=t||\"all\"}),o}function n(e,n){e.onload=function(){e.onload=null,n&&n.call(e)},\"isApplicationInstalled\"in navigator&&\"onloadcssdefined\"in e&&e.onloadcssdefined(n)}!function(t){var o=function(a,i){\"use strict\";if(a&&3===a.length){var r=t.navigator,d=t.document,s=t.Image,c=!(!d.createElementNS||!d.createElementNS(\"http://www.w3.org/2000/svg\",\"svg\").createSVGRect||!d.implementation.hasFeature(\"http://www.w3.org/TR/SVG11/feature#Image\",\"1.1\")||t.opera&&-1===r.userAgent.indexOf(\"Chrome\")||-1!==r.userAgent.indexOf(\"Series40\")),l=new s;l.onerror=function(){o.method=\"png\",o.href=a[2],e(a[2])},l.onload=function(){var t=1===l.width&&1===l.height,r=a[t&&c?0:t?1:2];t&&c?o.method=\"svg\":t?o.method=\"datapng\":o.method=\"png\",o.href=r,n(e(r),i)},l.src=\"data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==\",d.documentElement.className+=\" grunticon\"}};o.loadCSS=e,o.onloadCSS=n,t.grunticon=o}(this)}();grunticon( [ \"/images/svg/icons.data.svg.css\", \"/images/svg/icons.data.png.css\", \"/images/svg/icons.fallback.css\" ] );</script></head><body><div id=\"navbar\"><div class=\"container\"><a href=\"/\" class=\"icon-brunch-logo-web\"></a><ul class=\"nav nav--main-nav\">");
// iterate nav
;(function(){
  var $$obj = nav;
  if ('number' == typeof $$obj.length) {

    for (var $index = 0, $$l = $$obj.length; $index < $$l; $index++) {
      var item = $$obj[$index];

var active = (filename == item.path + '.jade') || (filename == 'index.jade' && !item.path)
if ( item.path.indexOf('http') == 0)
{
buf.push("<li><a" + (jade.attr("href", item.path, true, true)) + (jade.cls(['nav__item--main-nav',active?'active':null], [null,true])) + ">" + (jade.escape(null == (jade_interp = item.title) ? "" : jade_interp)) + "</a></li>");
}
else
{
buf.push("<li><a" + (jade.attr("href", '/'+item.path+(item.path?'.html':''), true, true)) + (jade.cls(['nav__item--main-nav',active?'active':null], [null,true])) + ">" + (jade.escape(null == (jade_interp = item.title) ? "" : jade_interp)) + "</a></li>");
}
    }

  } else {
    var $$l = 0;
    for (var $index in $$obj) {
      $$l++;      var item = $$obj[$index];

var active = (filename == item.path + '.jade') || (filename == 'index.jade' && !item.path)
if ( item.path.indexOf('http') == 0)
{
buf.push("<li><a" + (jade.attr("href", item.path, true, true)) + (jade.cls(['nav__item--main-nav',active?'active':null], [null,true])) + ">" + (jade.escape(null == (jade_interp = item.title) ? "" : jade_interp)) + "</a></li>");
}
else
{
buf.push("<li><a" + (jade.attr("href", '/'+item.path+(item.path?'.html':''), true, true)) + (jade.cls(['nav__item--main-nav',active?'active':null], [null,true])) + ">" + (jade.escape(null == (jade_interp = item.title) ? "" : jade_interp)) + "</a></li>");
}
    }

  }
}).call(this);

buf.push("</ul></div></div><div class=\"page__content container\"><h2 id=\"compare\">Compare</h2>\n<p>Brunch is similar to <a href=\"http://gruntjs.com\">Grunt</a>, LiveReload and CodeKit.</p>\n<p>And it’s also different.</p>\n<p>LiveReload and CodeKit partly resemble Brunch compilation pipeline, file watching and auto reloading, but they don’t support advanced features like modules, Bower support or source maps generation</p>\n<p>Grunt task manager is in some ways more flexible than Brunch, but its flexibility and explicitness can quickly become complexity.</p></p>\n<table>\n  <tr>\n    <th>Feature</th>\n    <th>Brunch</th>\n    <th>Grunt</th>\n    <th><span title=\"The Rails asset pipeline\">Rails</span></th>\n    <th>Comment</th>\n  </tr>\n  <tr>\n    <th>Builder, linter, concatenator, minifier</th>\n    <td class=\"has-feature\">✓</td>\n    <td class=\"has-feature\">✓</td>\n    <td class=\"has-feature\">✓</td>\n    <td>Brunch can compile your JS, CoffeeScript, Stylus, Sass (+ Compass), LESS, Mustache, Handlebars, Jade, Eco (and much more) files, concatenate output to and minify it. It just doesn’t care about languages or frameworks you use.</td>\n  </tr>\n  <tr>\n    <th>File watcher</th>\n    <td class=\"has-feature\">✓</td>\n    <td class=\"has-feature\">✓</td>\n    <td class=\"has-feature\">✓</td>\n    <td>Brunch recompiles and concats all your stuff automatically on any change, headlessly. No more need in complicated Makefiles and watchers.</td>\n  </tr>\n  <tr>\n    <th>Auto-reload</th>\n    <td class=\"has-feature\">✓</td>\n    <td class=\"has-feature\">✓</td>\n    <td class=\"has-feature\">✓</td>\n    <td>Brunch reloads your browser window every time you change stuff (with autoreload plugin)</td>\n  </tr>\n  <tr>\n    <th>Framework-agnostic</th>\n    <td class=\"has-feature\">✓</td>\n    <td class=\"has-feature\">✓</td>\n    <td class=\"hasnt-feature\">✗</td>\n    <td>Brunch just doesn’t care about stuff you’re using for structure. You can use any backend you like, be it node.js, Rails or Lift. You can even keep frontend and backend as separate projects.</td>\n  </tr>\n  <tr>\n    <th>Auto-support for modules</th>\n    <td class=\"has-feature\">✓</td>\n    <td class=\"has-feature\">✓</td>\n    <td class=\"hasnt-feature\">✗</td>\n    <td>All script and template files may be wrapped in modules (CommonJS or AMD) to prohibit global public access and encapsulate code. Brunch may also do the job of r.js optimizer automatically.</td>\n  </tr>\n  <tr>\n    <th>Skeletons / boilerplates</th>\n    <td class=\"has-feature\">✓</td>\n    <td class=\"has-feature\">✓</td>\n    <td class=\"hasnt-feature\">✗</td>\n    <td>Brunch can generate your project from predefined template. There’s a lot of great skeleton projects you can use already.</a></td>\n  </tr>\n  <tr>\n    <th>Blazing fast</th>\n    <td class=\"has-feature\">✓</td>\n    <td class=\"hasnt-feature\">✗</td>\n    <td class=\"hasnt-feature\">✗</td>\n    <td>Speed is important for app watchers. Usual brunch compilation takes less time than you need to alt-tab to browser window. Unlike Grunt, Brunch recompiles only changed parts of your app and extensively uses caching for others.</td>\n  </tr>\n  <tr>\n    <th>Incredibly simple</th>\n    <td class=\"has-feature\">✓</td>\n    <td class=\"hasnt-feature\">✗</td>\n    <td class=\"hasnt-feature\">✗</td>\n    <td>All you need to do with Brunch is run one command and everything will be managed for you, without need to write <a href=\"https://gist.github.com/paulmillr/3697384\">sophisticated 300LOC build configs</a>.</td>\n  </tr>\n  <tr>\n    <th>Headless <a href=\"http://bower.io\">Bower</a> integration</th>\n    <td class=\"has-feature\">✓</td>\n    <td class=\"hasnt-feature\">✗</td>\n    <td class=\"hasnt-feature\">✗</td>\n    <td>Brunch supports <a href=\"https://github.com/brunch/brunch/blob/master/docs/faq.md#how-to-use-bower\">headless integration</a> with Bower package manager. Unlike with Grunt, you don’t need to specify all used files in details — brunch will auto-detect them in most cases and automatically concat in correct order</td>\n  </tr>\n  <tr>\n    <th>Headless source maps generation</th>\n    <td class=\"has-feature\">✓</td>\n    <td class=\"hasnt-feature\">✗</td>\n    <td class=\"hasnt-feature\">✗</td>\n    <td>Brunch automatically generates source maps for all your files so debugging becomes very simple even when all files are concatenated and minified. <!--Brunch simply generates even sophisticated source maps (compile coffeescript and templates -> concatenate all files -> minify with uglify.js)--></td>\n  </tr>\n  <tr>\n    <th>Cross-platform and free</th>\n    <td class=\"has-feature\">✓</td>\n    <td class=\"has-feature\">✓</td>\n    <td class=\"has-feature\">✓</td>\n    <td>Brunch is free, both as in beer and as in speech and works everywhere.</td>\n  </tr>\n</table><footer><hr class=\"rule\"><p><small>Hosted on <a href=\"https://github.com/brunch/brunch.github.com\">GitHub Pages</a>. The content on this website is licensed under a <a rel=\"license\" href=\"http://creativecommons.org/licenses/by/3.0/deed.en_US\">CC BY 3.0</a>. Logo by <a href=\"http://helle.in\">Michael Hellein</a></small></p></footer></div><script src=\"scripts/app.js\"></script><script>require('scripts/app');\n</script>  <script type=\"text/javascript\">\n    var _gauges = _gauges || [];\n    (function() {\n      var t   = document.createElement('script');\n      t.type  = 'text/javascript';\n      t.async = true;\n      t.id    = 'gauges-tracker';\n      t.setAttribute('data-site-id', '4f1631bbcb25bc723b000007');\n      t.src = '//secure.gaug.es/track.js';\n      var s = document.getElementsByTagName('script')[0];\n      s.parentNode.insertBefore(t, s);\n    })();\n  </script>\n</body></html>");}.call(this,"filename" in locals_for_with?locals_for_with.filename:typeof filename!=="undefined"?filename:undefined,"nav" in locals_for_with?locals_for_with.nav:typeof nav!=="undefined"?nav:undefined,"undefined" in locals_for_with?locals_for_with.undefined:typeof undefined!=="undefined"?undefined:undefined));;return buf.join("");
};
if (typeof define === 'function' && define.amd) {
  define([], function() {
    return __templateData;
  });
} else if (typeof module === 'object' && module && module.exports) {
  module.exports = __templateData;
} else {
  __templateData;
}
});

;require.register("examples", function(exports, require, module) {
var __templateData = function template(locals) {
var buf = [];
var jade_mixins = {};
var jade_interp;
;var locals_for_with = (locals || {});(function (filename, nav, undefined) {
buf.push("<!DOCTYPE html><html><head><meta charset=\"utf-8\"><meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge,chrome=1\"><title>Brunch - ultra-fast HTML5 build tool</title><meta name=\"description\" content=\"Brunch builds, lints, compiles, concatenates and shrinks your HTML5 app in an ultra-simple way. No more Grunt / Gulp mess.\"><meta name=\"viewport\" content=\"width=device-width, initial-scale=1\"><link rel=\"shortcut icon\" type=\"image/x-icon\" href=\"/favicon.ico\"><link rel=\"stylesheet\" href=\"styles/app.css\"><link rel=\"publisher\" href=\"https://plus.google.com/+PaulMillerLi\"><!--[if lt IE 9]>\n<script src=\"//html5shiv.googlecode.com/svn/trunk/html5.js\"></script>\n<![endif]--><script>/*! grunt-grunticon Stylesheet Loader - v2.1.6 | https://github.com/filamentgroup/grunticon | (c) 2015 Scott Jehl, Filament Group, Inc. | MIT license. */\n\n!function(){function e(e,n,t){\"use strict\";var o=window.document.createElement(\"link\"),a=n||window.document.getElementsByTagName(\"script\")[0],i=window.document.styleSheets;return o.rel=\"stylesheet\",o.href=e,o.media=\"only x\",a.parentNode.insertBefore(o,a),o.onloadcssdefined=function(e){for(var n,t=0;t<i.length;t++)i[t].href&&i[t].href===o.href&&(n=!0);n?e():setTimeout(function(){o.onloadcssdefined(e)})},o.onloadcssdefined(function(){o.media=t||\"all\"}),o}function n(e,n){e.onload=function(){e.onload=null,n&&n.call(e)},\"isApplicationInstalled\"in navigator&&\"onloadcssdefined\"in e&&e.onloadcssdefined(n)}!function(t){var o=function(a,i){\"use strict\";if(a&&3===a.length){var r=t.navigator,d=t.document,s=t.Image,c=!(!d.createElementNS||!d.createElementNS(\"http://www.w3.org/2000/svg\",\"svg\").createSVGRect||!d.implementation.hasFeature(\"http://www.w3.org/TR/SVG11/feature#Image\",\"1.1\")||t.opera&&-1===r.userAgent.indexOf(\"Chrome\")||-1!==r.userAgent.indexOf(\"Series40\")),l=new s;l.onerror=function(){o.method=\"png\",o.href=a[2],e(a[2])},l.onload=function(){var t=1===l.width&&1===l.height,r=a[t&&c?0:t?1:2];t&&c?o.method=\"svg\":t?o.method=\"datapng\":o.method=\"png\",o.href=r,n(e(r),i)},l.src=\"data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==\",d.documentElement.className+=\" grunticon\"}};o.loadCSS=e,o.onloadCSS=n,t.grunticon=o}(this)}();grunticon( [ \"/images/svg/icons.data.svg.css\", \"/images/svg/icons.data.png.css\", \"/images/svg/icons.fallback.css\" ] );</script></head><body><div id=\"navbar\"><div class=\"container\"><a href=\"/\" class=\"icon-brunch-logo-web\"></a><ul class=\"nav nav--main-nav\">");
// iterate nav
;(function(){
  var $$obj = nav;
  if ('number' == typeof $$obj.length) {

    for (var $index = 0, $$l = $$obj.length; $index < $$l; $index++) {
      var item = $$obj[$index];

var active = (filename == item.path + '.jade') || (filename == 'index.jade' && !item.path)
if ( item.path.indexOf('http') == 0)
{
buf.push("<li><a" + (jade.attr("href", item.path, true, true)) + (jade.cls(['nav__item--main-nav',active?'active':null], [null,true])) + ">" + (jade.escape(null == (jade_interp = item.title) ? "" : jade_interp)) + "</a></li>");
}
else
{
buf.push("<li><a" + (jade.attr("href", '/'+item.path+(item.path?'.html':''), true, true)) + (jade.cls(['nav__item--main-nav',active?'active':null], [null,true])) + ">" + (jade.escape(null == (jade_interp = item.title) ? "" : jade_interp)) + "</a></li>");
}
    }

  } else {
    var $$l = 0;
    for (var $index in $$obj) {
      $$l++;      var item = $$obj[$index];

var active = (filename == item.path + '.jade') || (filename == 'index.jade' && !item.path)
if ( item.path.indexOf('http') == 0)
{
buf.push("<li><a" + (jade.attr("href", item.path, true, true)) + (jade.cls(['nav__item--main-nav',active?'active':null], [null,true])) + ">" + (jade.escape(null == (jade_interp = item.title) ? "" : jade_interp)) + "</a></li>");
}
else
{
buf.push("<li><a" + (jade.attr("href", '/'+item.path+(item.path?'.html':''), true, true)) + (jade.cls(['nav__item--main-nav',active?'active':null], [null,true])) + ">" + (jade.escape(null == (jade_interp = item.title) ? "" : jade_interp)) + "</a></li>");
}
    }

  }
}).call(this);

buf.push("</ul></div></div><div class=\"page__content container\"><h1>Examples</h1>\n\n<p>\n  We know of a few folks who are using brunch to aid their development.\n  Ranging from internal tooling to high traffic facebook apps.\n</p>\n\n<p class=\"users\">\n  <img src=\"images/users/codecombat.png\" alt=\"CodeCombat\">\n  <img src=\"images/users/fnd.png\" alt=\"fnd\">\n  <img src=\"images/users/jebbit.png\" alt=\"Jebbit\">\n  <img src=\"images/users/jimbeam.png\" alt=\"Jim Beam\">\n  <img src=\"images/users/redbull.png\" alt=\"Red Bull\">\n  <br>\n  <img src=\"images/users/trunkclub.png\" alt=\"Trunk Club. Hand-selected clothing for men.\">\n  <img src=\"images/users/uber.png\" alt=\"Uber\">\n  <img src=\"images/users/ykky.png\" alt=\"YKKY\">\n</p>\n\n<p>If you want to <strong>add your project here</strong>, simply <a href=\"https://github.com/brunch/brunch.github.com/blob/brunch/app/_includes/examples.html\">edit this page</a> and submit a pull request.</p>\n\n<h2>blossom</h2>\n<p>\n  <a href=\"https://www.blossom.io\">Blossom</a> is a lightweight project management tool for lean teams. Backbone.js is heavily used in combination with CoffeeScript to provide a smooth interaction experience. The RESTful backend is built with Flask on Google App Engine.\n</p>\n<p class=\"example-screenshot\">\n  <a href=\"https://www.blossom.io/\">\n    <img src=\"images/screenshots/blossom.png\" alt=\"Blossom\" width=\"580\" />\n  </a>\n</p>\n\n<h2>Blimp</h2>\n<p>\n  <a href=\"http://www.getblimp.com/\">Blimp</a> is a super easy to use and beautiful project management software for people who want to DO more and manage less.\n</p>\n<p class=\"example-screenshot\">\n  <a href=\"http://www.getblimp.com/\">\n    <img src=\"images/screenshots/blimp.png\" alt=\"\" width=\"580\" />\n  </a>\n</p>\n\n<h2>ChainCal</h2>\n<p>\n  <a href=\"http://chaincalapp.com\">ChainCal</a> is an iPhone app that helps you to track your daily goals in a minimalist, visual way. The app is written almost entirely in CoffeeScript, Backbone handles the models, collections and views, and persistence is done with a Backbone.sync localStorage adapter. Templates are written in Eco and the app is packaged with Brunch and deployed with Phonegap.\n</p>\n<p>\n  <a href=\"http://chaincalapp.com\">\n    <img src=\"images/screenshots/chaincal.png\" alt=\"Chaincal\" />\n  </a>\n</p>\n\n<h2>CodeCombat</h2>\n<p>\n  <a href=\"http://codecombat.com/\">CodeCombat</a> is an open-source game for learning to code (<a href=\"https://github.com/codecombat/codecombat\">code</a>). It's also the largest open-source CoffeeScript project. They love Brunch so much, they've even <a href=\"http://blog.jetbrains.com/webstorm/2014/06/the-brunch-build-tool/\">guest-blogged about it</a>.\n</p>\n<p class=\"example-screenshot\">\n  <a href=\"http://codecombat.com/\">\n    <img src=\"images/screenshots/codecombat.png\" alt=\"\" width=\"580\">\n  </a>\n</p>\n\n<h2>Cozy Cloud</h2>\n<p>\n  <a href=\"https://www.cozycloud.cc/\">Cozy Cloud</a> is your own private personal cloud. A server you can trust to store your personal data and host web apps. You can host it with us at Cozy or host it at home, it's up to you!\n</p>\n<p>\n  Cozy cloud aims at using only standard execution environments. For each of them they suggest a coherent set of powerful technologies.\n</p>\n<p class=\"example-screenshot\">\n  <a href=\"http://www.cozycloud.cc\">\n    <img src=\"images/screenshots/cozycloud.jpg\" alt=\"Cozycloud\" />\n  </a>\n</p>\n\n<h2>Delicious</h2>\n<p>\n  <a href=\"https://delicious.com\">Delicious</a> is a free service designed to be the best place to save what you love on the web, whether it's a video, picture, product, blog post, article or music. We then help you remember and find it later. It’s using Brunch as application builder and <a href=\"http://chaplinjs.org\">Chaplin</a> as a framework on top of Backbone.\n</p>\n<p class=\"example-screenshot\">\n  <a href=\"https://delicious.com\">\n    <img src=\"images/screenshots/delicious.png\" alt=\"Delicious\" width=\"580\" />\n  </a>\n</p>\n\n<h2>Dogkr</h2>\n<p>\n  <a href=\"http://www.dogkr.com\">Dogkr</a> is an online logger to record all your beloved dogs’ life moments, even tiny instants became timeless memories.\n</p>\n<p>Brunch.js, along with Chaplin.js, is the major framework used in Dogkr's front-end. It helped us increase development productivity dramatically. Brunch.js made the whole project retain at manageable scale while the project size and complexity goes up wildly.</p>\n<p class=\"example-screenshot\">\n  <a href=\"http://dogkr.com\">\n    <img src=\"images/screenshots/dogkr.jpg\" alt=\"\" width=\"580\" />\n  </a>\n</p>\n\n<h2>Ember-bloggr</h2>\n<p>\n  <a href=\"https://github.com/gcollazo/ember-bloggr\">Ember-bloggr</a>\n  is a simple demo app based on the\n  <a href=\"http://www.youtube.com/watch?v=Ga99hMi7wfY\">Building an App with Ember.js video</a>.\n</p>\n\n<h2>fnd</h2>\n<p>\n  Experience the App Store and iTunes Anywhere with\n  <a href=\"https://fnd.io\">fnd</a>. Built using the\n  <a href=\"https://github.com/mutewinter/tapas-with-ember\">\n    Tapas with Ember</a>\n  skeleton.\n</p>\n<p class=\"example-screenshot\">\n  <a href=\"https://fnd.io\">\n    <img src=\"images/screenshots/fnd.png\" alt=\"fnd\" width=\"580\" />\n  </a>\n</p>\n\n<h2>Hackerank</h2>\n<p>\n  <a href=\"http://hackerank.herokuapp.com/\">Hackerank</a> is an example app that finds the top hackers of a github repo search.\n  Uses <a href=\"https://github.com/elving/brunch-with-hipsters\">brunch with hipsters</a> as base skeleton.\n</p>\n<p class=\"example-screenshot\">\n  <a href=\"http://hackerank.herokuapp.com/\">\n    <img src=\"images/screenshots/hackerank.png\" alt=\"Hackerank\" width=\"580\" />\n  </a>\n</p>\n\n<h2>Jebbit</h2>\n<p>\n  <a href=\"//www.jebbit.com/\">Jebbit</a> powers Post-Click Engagement&#0153; for some of the world's largest brands. Jebbit uses Brunch to power consumer-facing adtech products, a large CMS and analytics platform used by brands and agencies, and a static website. Jebbit also has <a href=\"https://github.com/sir-dunxalot/ember-blog\" target=\"_blank\">several open-source projects</a> built on Brunch and actively develops <a href=\"//github.com/sir-dunxalot/yaml-front-matter-brunch\" target=\"_blank\">Brunch plugins</a> to support the community.\n</p>\n<p class=\"example-screenshot\">\n  <a href=\"//www.jebbit.com\">\n    <img src=\"images/screenshots/jebbit.png\" alt=\"A screenshot of the Jebbit Homesite, powered by Brunch\" />\n  </a>\n</p>\n\n<h2>MazeMap</h2>\n<p>\n  <a href=\"http://use.mazemap.com/\">MazeMap</a> is an indoor navigation utility that works in the browser on desktop and mobile devices. Customers with big indoor areas can provide MazeMap as a service to their visitors who can then use the MazeMap application to find their way around with a-to-b indoor paths, and viewing their own position inside a building where GPS signals don't work. Searching for any room also works beautifully.\n</p>\n<p class=\"example-screenshot\">\n  <a href=\"http://use.mazemap.com/\">\n    <img src=\"images/screenshots/mazemap.png\" alt=\"\" width=\"580\"/>\n  </a>\n</p>\n\n<h2>Ostio</h2>\n<p>\n  <a href=\"http://ost.io/\">Ostio</a> is an open-source forum for GitHub projects (<a href=\"https://github.com/paulmillr/ostio\">code</a>). Uses default <a href=\"https://github.com/paulmillr/brunch-with-chaplin\">Chaplin</a> as app skeleton and Rails for backend.\n</p>\n<p class=\"example-screenshot\">\n  <a href=\"http://ost.io/\">\n    <img src=\"images/screenshots/ostio.png\" alt=\"\" width=\"580\">\n  </a>\n</p>\n\n<h2>Todos</h2>\n<p>\n  <a href=\"http://todomvc.com/labs/dependency-examples/chaplin-brunch/public/\">Todos</a> (<a href=\"https://github.com/addyosmani/todomvc/tree/gh-pages/labs/dependency-examples/chaplin-brunch\">code</a>) is a port of the famous backbone todos example app. Uses localStorage to persist data.\n</p>\n<p class=\"example-screenshot\">\n  <a href=\"http://todomvc.com/labs/dependency-examples/chaplin-brunch/public/\">\n    <img src=\"http://todomvc.com/site-assets/screenshot.png\" alt=\"\" />\n  </a>\n</p>\n\n<h2>Trunk Club</h2>\n<p>\n  <a href=\"https://www.trunkclub.com\">Trunk Club</a>. Hand-selected clothing for men. Uses the open-source skeleton <a href=\"https://github.com/trunkclub/brunch-with-panache\">Brunch with Panache</a> for internal tooling as well as the member-facing sign-up and authenticated dot-com experience.\n</p>\n<p class=\"example-screenshot\">\n  <a href=\"https://www.trunkclub.com\">\n    <img src=\"images/screenshots/trunkclub.png\" alt=\"\" width=\"580\">\n  </a>\n</p>\n\n<h2>Uber</h2>\n<p>\n  <a href=\"http://uber.com\">Uber</a> is everyone’s private driver. Their <a href=\"http://clients.uber.com/\">clients app</a> is made with brunch.\n</p>\n<footer><hr class=\"rule\"><p><small>Hosted on <a href=\"https://github.com/brunch/brunch.github.com\">GitHub Pages</a>. The content on this website is licensed under a <a rel=\"license\" href=\"http://creativecommons.org/licenses/by/3.0/deed.en_US\">CC BY 3.0</a>. Logo by <a href=\"http://helle.in\">Michael Hellein</a></small></p></footer></div><script src=\"scripts/app.js\"></script><script>require('scripts/app');\n</script>  <script type=\"text/javascript\">\n    var _gauges = _gauges || [];\n    (function() {\n      var t   = document.createElement('script');\n      t.type  = 'text/javascript';\n      t.async = true;\n      t.id    = 'gauges-tracker';\n      t.setAttribute('data-site-id', '4f1631bbcb25bc723b000007');\n      t.src = '//secure.gaug.es/track.js';\n      var s = document.getElementsByTagName('script')[0];\n      s.parentNode.insertBefore(t, s);\n    })();\n  </script>\n</body></html>");}.call(this,"filename" in locals_for_with?locals_for_with.filename:typeof filename!=="undefined"?filename:undefined,"nav" in locals_for_with?locals_for_with.nav:typeof nav!=="undefined"?nav:undefined,"undefined" in locals_for_with?locals_for_with.undefined:typeof undefined!=="undefined"?undefined:undefined));;return buf.join("");
};
if (typeof define === 'function' && define.amd) {
  define([], function() {
    return __templateData;
  });
} else if (typeof module === 'object' && module && module.exports) {
  module.exports = __templateData;
} else {
  __templateData;
}
});

;require.register("index", function(exports, require, module) {
var __templateData = function template(locals) {
var buf = [];
var jade_mixins = {};
var jade_interp;
;var locals_for_with = (locals || {});(function (filename, nav, social, undefined) {
buf.push("<!DOCTYPE html><html><head><meta charset=\"utf-8\"><meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge,chrome=1\"><title>Brunch - ultra-fast HTML5 build tool</title><meta name=\"description\" content=\"Brunch builds, lints, compiles, concatenates and shrinks your HTML5 app in an ultra-simple way. No more Grunt / Gulp mess.\"><meta name=\"viewport\" content=\"width=device-width, initial-scale=1\"><link rel=\"shortcut icon\" type=\"image/x-icon\" href=\"/favicon.ico\"><link rel=\"stylesheet\" href=\"styles/app.css\"><link rel=\"publisher\" href=\"https://plus.google.com/+PaulMillerLi\"><!--[if lt IE 9]>\n<script src=\"//html5shiv.googlecode.com/svn/trunk/html5.js\"></script>\n<![endif]--><script>/*! grunt-grunticon Stylesheet Loader - v2.1.6 | https://github.com/filamentgroup/grunticon | (c) 2015 Scott Jehl, Filament Group, Inc. | MIT license. */\n\n!function(){function e(e,n,t){\"use strict\";var o=window.document.createElement(\"link\"),a=n||window.document.getElementsByTagName(\"script\")[0],i=window.document.styleSheets;return o.rel=\"stylesheet\",o.href=e,o.media=\"only x\",a.parentNode.insertBefore(o,a),o.onloadcssdefined=function(e){for(var n,t=0;t<i.length;t++)i[t].href&&i[t].href===o.href&&(n=!0);n?e():setTimeout(function(){o.onloadcssdefined(e)})},o.onloadcssdefined(function(){o.media=t||\"all\"}),o}function n(e,n){e.onload=function(){e.onload=null,n&&n.call(e)},\"isApplicationInstalled\"in navigator&&\"onloadcssdefined\"in e&&e.onloadcssdefined(n)}!function(t){var o=function(a,i){\"use strict\";if(a&&3===a.length){var r=t.navigator,d=t.document,s=t.Image,c=!(!d.createElementNS||!d.createElementNS(\"http://www.w3.org/2000/svg\",\"svg\").createSVGRect||!d.implementation.hasFeature(\"http://www.w3.org/TR/SVG11/feature#Image\",\"1.1\")||t.opera&&-1===r.userAgent.indexOf(\"Chrome\")||-1!==r.userAgent.indexOf(\"Series40\")),l=new s;l.onerror=function(){o.method=\"png\",o.href=a[2],e(a[2])},l.onload=function(){var t=1===l.width&&1===l.height,r=a[t&&c?0:t?1:2];t&&c?o.method=\"svg\":t?o.method=\"datapng\":o.method=\"png\",o.href=r,n(e(r),i)},l.src=\"data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==\",d.documentElement.className+=\" grunticon\"}};o.loadCSS=e,o.onloadCSS=n,t.grunticon=o}(this)}();grunticon( [ \"/images/svg/icons.data.svg.css\", \"/images/svg/icons.data.png.css\", \"/images/svg/icons.fallback.css\" ] );</script></head><body><div id=\"navbar\"><div class=\"container\"><a href=\"/\" class=\"icon-brunch-logo-web\"></a><ul class=\"nav nav--main-nav\">");
// iterate nav
;(function(){
  var $$obj = nav;
  if ('number' == typeof $$obj.length) {

    for (var $index = 0, $$l = $$obj.length; $index < $$l; $index++) {
      var item = $$obj[$index];

var active = (filename == item.path + '.jade') || (filename == 'index.jade' && !item.path)
if ( item.path.indexOf('http') == 0)
{
buf.push("<li><a" + (jade.attr("href", item.path, true, true)) + (jade.cls(['nav__item--main-nav',active?'active':null], [null,true])) + ">" + (jade.escape(null == (jade_interp = item.title) ? "" : jade_interp)) + "</a></li>");
}
else
{
buf.push("<li><a" + (jade.attr("href", '/'+item.path+(item.path?'.html':''), true, true)) + (jade.cls(['nav__item--main-nav',active?'active':null], [null,true])) + ">" + (jade.escape(null == (jade_interp = item.title) ? "" : jade_interp)) + "</a></li>");
}
    }

  } else {
    var $$l = 0;
    for (var $index in $$obj) {
      $$l++;      var item = $$obj[$index];

var active = (filename == item.path + '.jade') || (filename == 'index.jade' && !item.path)
if ( item.path.indexOf('http') == 0)
{
buf.push("<li><a" + (jade.attr("href", item.path, true, true)) + (jade.cls(['nav__item--main-nav',active?'active':null], [null,true])) + ">" + (jade.escape(null == (jade_interp = item.title) ? "" : jade_interp)) + "</a></li>");
}
else
{
buf.push("<li><a" + (jade.attr("href", '/'+item.path+(item.path?'.html':''), true, true)) + (jade.cls(['nav__item--main-nav',active?'active':null], [null,true])) + ">" + (jade.escape(null == (jade_interp = item.title) ? "" : jade_interp)) + "</a></li>");
}
    }

  }
}).call(this);

buf.push("</ul></div></div><div class=\"hero\"><div class=\"container\"><div class=\"grid\"><div class=\"grid__item one-whole lap-and-up-one-third\"><div class=\"icon-brunch-logo-napkin\"></div></div><div class=\"grid__item one-whole lap-and-up-two-thirds\"><div class=\"hero__content\"><h1 class=\"kilo\">Will you be coming to brunch?</h1><h3 class=\"flush--bottom soft-half--bottom\">Brunch...</h3><ul class=\"nav nav--keywords nav--sentence\"><li><strong>compiles</strong> your scripts, templates, styles</li><li><strong>lints</strong> them</li><li><strong>wraps</strong> the scripts and templates in common.js / AMD modules.</li><li><strong>concatenates</strong> scripts and styles</li><li><strong>generates source maps</strong> for concatenated files</li><li><strong>copies</strong> assets and static files</li><li><strong>shrinks</strong> the output by minifying code and optimizing images</li><li><strong>watches</strong> your files for changes</li><li><strong>notifies</strong> you about errors via console and system notifications</li></ul></div></div></div></div></div><div class=\"page__content container\"><div class=\"grid\"><div style=\"float:right\" class=\"grid__item one-whole desk-one-third\"><div class=\"social-buttons\">");
// iterate social
;(function(){
  var $$obj = social;
  if ('number' == typeof $$obj.length) {

    for (var $index = 0, $$l = $$obj.length; $index < $$l; $index++) {
      var service = $$obj[$index];

buf.push("<span><iframe allowtransparency=\"true\" frameborder=\"0\" scrolling=\"no\"" + (jade.attr("src", service.src, true, true)) + (jade.attr("style", "width: " + (service.width) + "px; height:30px;", true, true)) + (jade.cls(["social-button-" + (service.classname) + ""], [true])) + "></iframe></span>");
    }

  } else {
    var $$l = 0;
    for (var $index in $$obj) {
      $$l++;      var service = $$obj[$index];

buf.push("<span><iframe allowtransparency=\"true\" frameborder=\"0\" scrolling=\"no\"" + (jade.attr("src", service.src, true, true)) + (jade.attr("style", "width: " + (service.width) + "px; height:30px;", true, true)) + (jade.cls(["social-button-" + (service.classname) + ""], [true])) + "></iframe></span>");
    }

  }
}).call(this);

buf.push("</div><a href=\"/#why\" class=\"others\"><h3>Why Brunch instead of competitors?</h3><img src=\"/images/others/grunt.png\" alt=\"\" height=\"128\"><img src=\"/images/others/gulp.png\" alt=\"\" height=\"128\"></a><div class=\"tweets\"><h3>People love Brunch!</h3><a class=\"twitter-timeline\" data-dnt=\"true\" href=\"https://twitter.com/brunch/favorites\" data-widget-id=\"397311715655684096\">Favorite Tweets by @brunch</a>\n<script>!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0],p=/^http:/.test(d.location)?'http':'https';if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src=p+\"://platform.twitter.com/widgets.js\";fjs.parentNode.insertBefore(js,fjs);}}(document,\"script\",\"twitter-wjs\");</script></div><h3 style=\"margin-top: 20px\">Community</h3><p>We have a <a href=\"http://ost.io/@brunch/brunch\">Forum</a> and\n<a href=\"http://stackoverflow.com/questions/tagged/brunch\">Stack Overflow tag</a>.\nWe also provide a <a href=\"http://hellyeah.is/\">paid support</a>.</p></div><div class=\"grid__item one-whole desk-two-thirds\"><h1>Brunch is an ultra-fast HTML5 build tool</h1><p>Installation is one-line, once you have <a href=\"http://nodejs.org/download/\">node.js</a>. In your console, run:</p>\n<pre><code>npm install -g brunch</code></pre>\n<h2 id=\"getting-started\">Getting started</h2>\n<h4 id=\"create-a-new-brunch-project-\">Create a new Brunch project:</h4>\n<pre><code>brunch new [dir] [--skeleton url]</code></pre>\n<p><code>skeleton</code> specifies a <a href=\"/skeletons.html\">skeleton</a> from which your application will be initialized. The default structure doesn&#39;t have any opinions about frameworks or libraries.</p>\n<p>There’s a great <a href=\"https://github.com/brunch/brunch-guide#readme\">guide</a> that lets you explore Brunch in-depth!</p>\n<p>You can also see the <a href=\"https://github.com/brunch/brunch/blob/master/docs/README.md\">README</a> for a complete description of app structure.</p>\n<h4 id=\"develop-with-brunch-\">Develop with Brunch:</h4>\n<pre><code>brunch watch --server</code></pre>\n<p>tells Brunch to watch your project and incrementally rebuild it when source files are changed. The optional <code>server</code> flag launches a simple web server with <a href=\"http://diveintohtml5.info/history.html\">push state</a> support.</p>\n<p>If you use OS X and want brunch to show system notification every time compilation error happens, you will need to install <a href=\"https://github.com/alloy/terminal-notifier\">terminal notifier</a>: <code>brew install terminal-notifier</code>.</p>\n<h4 id=\"build-with-brunch-\">Build with Brunch:</h4>\n<pre><code>brunch build --production</code></pre>\n<p>builds a project for distribution. By default it enables minification.</p>\n<h1 id=\"documentation\">Documentation</h1>\n<p>All reference docs are available <a href=\"https://github.com/brunch/brunch/tree/master/docs\">on GitHub</a>.\nThe best way to discover Brunch is probably to start with the <a href=\"https://github.com/brunch/brunch-guide#readme\">guide</a>.</p>\n<h2 id=\"a-quick-demo\">A Quick Demo</h2>\n<p>For more info on getting started with Brunch, see <a href=\"http://alxhill.com/blog/articles/brunch-coffeescript-angular/\">the article</a> or <a href=\"http://vimeo.com/75702540\">the introductory video and screencast</a>:</p>\n<iframe src=\"http://player.vimeo.com/video/75702540\" style=\"width: 100%; height: 388px\" frameborder=\"0\" webkitAllowFullScreen mozallowfullscreen allowFullScreen></iframe>\n\n<h2>Deploying</h2>\n\n<p>\n  Brunch-generated applications are a bunch of simple static files. You can\n  host them everywhere, even on free hostings, like\n  <a href=\"http://help.github.com/pages/\">GitHub pages</a>.\n\n  Because production environments are usually\n  slightly different than development envs,\n  brunch has <code>production</code> option.\n</p>\n\n<p>To build application that has minified JS and CSS, execute <code>brunch build --production</code>. Then you can deploy it:</p>\n\n<ul>\n  <li>\n    If you use <strong>static hosting site</strong>: build your application\n    on your machine and just upload <code>public/</code>\n    directory to the directory that is served by a webserver.\n  </li>\n  <li>\n    If you use <strong>hosting that supports node.js</strong>, you can\n    install brunch there and auto-build app every time.\n  </li>\n  <li>\n    If you prefer <a href=\"http://heroku.com/\">Heroku</a>,\n    there is <a href=\"https://gist.github.com/3596447\">a nice small guide</a>\n    on deploying.\n    Should work even on free instances.\n  </li>\n  <li>\n    If you’re into\n    <a href=\"http://help.github.com/pages/\">GitHub pages</a>,\n    you’ll need to build your app,\n    move <code>public/</code> directory to somewhere,\n    <a href=\"http://git-scm.com/book/en/Git-Branching-Basic-Branching-and-Merging\">switch to <code>gh-pages</code>\n    git branch</a>,\n    remove files from directory and move files from your temporary\n    dir here.\n  </li>\n</ul>\n\n<h2 id=\"why\">Why Brunch and not Grunt and Gulp</h2>\n\n<p>So, you&#39;re coming from Grunt or Gulp and may be wondering how Brunch is better.</p>\n\n<p>First of all, Brunch is order-of-magnitude simpler. Check out typical configs for alternative build systems: <a href=\"https://gist.github.com/paulmillr/eb3ae139aadbbb87ab9b#file-grunt-js\">Grunt</a>, <a href=\"https://gist.github.com/paulmillr/eb3ae139aadbbb87ab9b#file-gulp-js\">Gulp</a>. And here&#39;s a typical <a href=\"https://github.com/paulmillr/brunch-with-chaplin/blob/master/brunch-config.coffee\">Brunch config</a> for comparison.</p>\n\n<p>There&#39;s also speed. When you spin off a brunch file watcher, the usual compilation time is less than 500ms. When combined with auto reload plugin, this allows a very efficient development environment. All thanks to the complex incremental compilation.</p>\n\n<p>The reason for the big difference is <em>design</em>. Grunt is merely a set of tasks that would be executed one after another. When this may seem more flexible on a first glance, in reality it isn&#39;t. With plugins, Brunch could do anything Grunt tasks do (and beyond). Brunch even has an adapter for Grunt tasks. Gulp is &quot;better Grunt&quot;, as they market it; or so may it seem. Gulp doesn&#39;t make temporary files, that&#39;s why it&#39;s a &quot;streaming build system&quot;. Still, it&#39;s not enough. Brunch&#39;s goal, in contrast, is to provide you with simplest and fastest possible way of managing and building your HTML5 app.</p>\n\n<p>Think of it. In every app you take a set of files and produce new files with them. You may use different languages, include code quality testers such as JSHint or minify the output, but the basic pipeline is always the same. That&#39;s why all brunch plugins may take one of a few predefined roles.</p>\n\n<p>Besides configs, brunch is also simpler in terms of commands. Grunt / Gulp commands replicate all plugins it loads. Brunch always has three commands: <code>new</code>, <code>build</code> and <code>watch</code>. Build / watch commands may receive optional <code>production</code> flag which will tell Brunch to optimize assets, javascripts and stylesheets.</p>\n\n<p>You can find a more in-depth discussion of what sets Brunch apart in <a href=\"https://github.com/brunch/brunch-guide/blob/master/content/en/chapter01-whats-brunch.md#readme\">chapter 1 of the guide</a>.</p>\n\n<h2>Brought to you by</h2><ul class=\"block-list builders\"><li><a href=\"http://paulmillr.com/\" rel=\"author\"><img src=\"https://secure.gravatar.com/avatar/d342e4ef045c54a6a6f41d070d8a0406?s=140&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-140.png\" width=\"48\" alt=\"Paul Miller\"><span class=\"name\">Paul</span> Miller</a></li><li><a href=\"https://github.com/es128\"><img src=\"https://secure.gravatar.com/avatar/c8c06173c01b4e95594e4af3a8a815f1?s=140&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-140.png\" width=\"48\" alt=\"Elan Shanker\"><span class=\"name\">Elan</span> Shanker</a></li><li><a href=\"http://nikgraf.com/\"><img src=\"https://secure.gravatar.com/avatar/8fc75580dbacd91ff28514b68baf1a8a?s=140&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-140.png\" width=\"48\" alt=\"Nik Graf\"><span class=\"name\">Nik</span> Graf</a></li><li><a href=\"http://ramen.io/\"><img src=\"https://secure.gravatar.com/avatar/37c5132eed30539456c79906dd8c6065?s=140&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-140.png\" width=\"48\" alt=\"Thomas Schranz\"><span class=\"name\">Thomas</span> Schranz</a></li></ul></div></div><footer><hr class=\"rule\"><p><small>Hosted on <a href=\"https://github.com/brunch/brunch.github.com\">GitHub Pages</a>. The content on this website is licensed under a <a rel=\"license\" href=\"http://creativecommons.org/licenses/by/3.0/deed.en_US\">CC BY 3.0</a>. Logo by <a href=\"http://helle.in\">Michael Hellein</a></small></p></footer></div><script src=\"scripts/app.js\"></script><script>require('scripts/app');\n</script>  <script type=\"text/javascript\">\n    var _gauges = _gauges || [];\n    (function() {\n      var t   = document.createElement('script');\n      t.type  = 'text/javascript';\n      t.async = true;\n      t.id    = 'gauges-tracker';\n      t.setAttribute('data-site-id', '4f1631bbcb25bc723b000007');\n      t.src = '//secure.gaug.es/track.js';\n      var s = document.getElementsByTagName('script')[0];\n      s.parentNode.insertBefore(t, s);\n    })();\n  </script>\n</body></html>");}.call(this,"filename" in locals_for_with?locals_for_with.filename:typeof filename!=="undefined"?filename:undefined,"nav" in locals_for_with?locals_for_with.nav:typeof nav!=="undefined"?nav:undefined,"social" in locals_for_with?locals_for_with.social:typeof social!=="undefined"?social:undefined,"undefined" in locals_for_with?locals_for_with.undefined:typeof undefined!=="undefined"?undefined:undefined));;return buf.join("");
};
if (typeof define === 'function' && define.amd) {
  define([], function() {
    return __templateData;
  });
} else if (typeof module === 'object' && module && module.exports) {
  module.exports = __templateData;
} else {
  __templateData;
}
});

;require.register("plugins", function(exports, require, module) {
var __templateData = function template(locals) {
var buf = [];
var jade_mixins = {};
var jade_interp;
;var locals_for_with = (locals || {});(function (filename, nav, undefined) {
buf.push("<!DOCTYPE html><html><head><meta charset=\"utf-8\"><meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge,chrome=1\"><title>Brunch - ultra-fast HTML5 build tool</title><meta name=\"description\" content=\"Brunch builds, lints, compiles, concatenates and shrinks your HTML5 app in an ultra-simple way. No more Grunt / Gulp mess.\"><meta name=\"viewport\" content=\"width=device-width, initial-scale=1\"><link rel=\"shortcut icon\" type=\"image/x-icon\" href=\"/favicon.ico\"><link rel=\"stylesheet\" href=\"styles/app.css\"><link rel=\"publisher\" href=\"https://plus.google.com/+PaulMillerLi\"><!--[if lt IE 9]>\n<script src=\"//html5shiv.googlecode.com/svn/trunk/html5.js\"></script>\n<![endif]--><script>/*! grunt-grunticon Stylesheet Loader - v2.1.6 | https://github.com/filamentgroup/grunticon | (c) 2015 Scott Jehl, Filament Group, Inc. | MIT license. */\n\n!function(){function e(e,n,t){\"use strict\";var o=window.document.createElement(\"link\"),a=n||window.document.getElementsByTagName(\"script\")[0],i=window.document.styleSheets;return o.rel=\"stylesheet\",o.href=e,o.media=\"only x\",a.parentNode.insertBefore(o,a),o.onloadcssdefined=function(e){for(var n,t=0;t<i.length;t++)i[t].href&&i[t].href===o.href&&(n=!0);n?e():setTimeout(function(){o.onloadcssdefined(e)})},o.onloadcssdefined(function(){o.media=t||\"all\"}),o}function n(e,n){e.onload=function(){e.onload=null,n&&n.call(e)},\"isApplicationInstalled\"in navigator&&\"onloadcssdefined\"in e&&e.onloadcssdefined(n)}!function(t){var o=function(a,i){\"use strict\";if(a&&3===a.length){var r=t.navigator,d=t.document,s=t.Image,c=!(!d.createElementNS||!d.createElementNS(\"http://www.w3.org/2000/svg\",\"svg\").createSVGRect||!d.implementation.hasFeature(\"http://www.w3.org/TR/SVG11/feature#Image\",\"1.1\")||t.opera&&-1===r.userAgent.indexOf(\"Chrome\")||-1!==r.userAgent.indexOf(\"Series40\")),l=new s;l.onerror=function(){o.method=\"png\",o.href=a[2],e(a[2])},l.onload=function(){var t=1===l.width&&1===l.height,r=a[t&&c?0:t?1:2];t&&c?o.method=\"svg\":t?o.method=\"datapng\":o.method=\"png\",o.href=r,n(e(r),i)},l.src=\"data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==\",d.documentElement.className+=\" grunticon\"}};o.loadCSS=e,o.onloadCSS=n,t.grunticon=o}(this)}();grunticon( [ \"/images/svg/icons.data.svg.css\", \"/images/svg/icons.data.png.css\", \"/images/svg/icons.fallback.css\" ] );</script></head><body><div id=\"navbar\"><div class=\"container\"><a href=\"/\" class=\"icon-brunch-logo-web\"></a><ul class=\"nav nav--main-nav\">");
// iterate nav
;(function(){
  var $$obj = nav;
  if ('number' == typeof $$obj.length) {

    for (var $index = 0, $$l = $$obj.length; $index < $$l; $index++) {
      var item = $$obj[$index];

var active = (filename == item.path + '.jade') || (filename == 'index.jade' && !item.path)
if ( item.path.indexOf('http') == 0)
{
buf.push("<li><a" + (jade.attr("href", item.path, true, true)) + (jade.cls(['nav__item--main-nav',active?'active':null], [null,true])) + ">" + (jade.escape(null == (jade_interp = item.title) ? "" : jade_interp)) + "</a></li>");
}
else
{
buf.push("<li><a" + (jade.attr("href", '/'+item.path+(item.path?'.html':''), true, true)) + (jade.cls(['nav__item--main-nav',active?'active':null], [null,true])) + ">" + (jade.escape(null == (jade_interp = item.title) ? "" : jade_interp)) + "</a></li>");
}
    }

  } else {
    var $$l = 0;
    for (var $index in $$obj) {
      $$l++;      var item = $$obj[$index];

var active = (filename == item.path + '.jade') || (filename == 'index.jade' && !item.path)
if ( item.path.indexOf('http') == 0)
{
buf.push("<li><a" + (jade.attr("href", item.path, true, true)) + (jade.cls(['nav__item--main-nav',active?'active':null], [null,true])) + ">" + (jade.escape(null == (jade_interp = item.title) ? "" : jade_interp)) + "</a></li>");
}
else
{
buf.push("<li><a" + (jade.attr("href", '/'+item.path+(item.path?'.html':''), true, true)) + (jade.cls(['nav__item--main-nav',active?'active':null], [null,true])) + ">" + (jade.escape(null == (jade_interp = item.title) ? "" : jade_interp)) + "</a></li>");
}
    }

  }
}).call(this);

buf.push("</ul></div></div><div class=\"page__content container\"><script>document.addEventListener('DOMContentLoaded', function() {\n  ReactDOM.render(React.createElement(require('scripts/plugins'), null), document.getElementById('plugins-body'));\n});\n</script><h1 id=\"plugins\">Plugins</h1>\n<p>\n  Brunch has a plugin ecosystem to achieve interoperability\n  with various stuff simply via\n  <a href=\"https://github.com/brunch/brunch/blob/master/docs/plugins.md\">plugin API</a>\n</p>\n\n<p>\n  For example, if you use JavaScript files in your project,\n  you’ll need a plugin that adds JS support.\n  Same with styles, templates, minifiers, linters and much more.\n</p>\n\n<p>\n  To install new plugin, simply execute <code>npm install --save plugin-name</code>. This will install its Node.js dependencies and save them to <code>package.json</code>.\n</p>\n\n<p>To remove it, edit <code>package.json</code>’s <code>dependencies</code> hash.\n  See <a href=\"http://npmjs.org/doc/json.html#dependencies\">npm docs</a>\n  for more docs on packages.\n</p>\n\n<p>\n  Search for <a href=\"https://www.npmjs.org/search?q=brunch\">brunch on npm</a> for even more plug-ins.\n</p>\n\n<div class=\"markdown-body\">\n\n<h1>\n<a name=\"plugins\" class=\"anchor\" href=\"#plugins\"><span class=\"octicon octicon-link\"></span></a>Plugins</h1>\n\n<p>If you want to <strong>add your project here</strong>, simply <a href=\"https://github.com/brunch/brunch.github.io/blob/brunch/app/assets/plugins.json\">edit this file</a> and submit a pull request.</p>\n</div>\n<div id=\"plugins-body\"></div><footer><hr class=\"rule\"><p><small>Hosted on <a href=\"https://github.com/brunch/brunch.github.com\">GitHub Pages</a>. The content on this website is licensed under a <a rel=\"license\" href=\"http://creativecommons.org/licenses/by/3.0/deed.en_US\">CC BY 3.0</a>. Logo by <a href=\"http://helle.in\">Michael Hellein</a></small></p></footer></div><script src=\"scripts/app.js\"></script><script>require('scripts/app');\n</script>  <script type=\"text/javascript\">\n    var _gauges = _gauges || [];\n    (function() {\n      var t   = document.createElement('script');\n      t.type  = 'text/javascript';\n      t.async = true;\n      t.id    = 'gauges-tracker';\n      t.setAttribute('data-site-id', '4f1631bbcb25bc723b000007');\n      t.src = '//secure.gaug.es/track.js';\n      var s = document.getElementsByTagName('script')[0];\n      s.parentNode.insertBefore(t, s);\n    })();\n  </script>\n</body></html>");}.call(this,"filename" in locals_for_with?locals_for_with.filename:typeof filename!=="undefined"?filename:undefined,"nav" in locals_for_with?locals_for_with.nav:typeof nav!=="undefined"?nav:undefined,"undefined" in locals_for_with?locals_for_with.undefined:typeof undefined!=="undefined"?undefined:undefined));;return buf.join("");
};
if (typeof define === 'function' && define.amd) {
  define([], function() {
    return __templateData;
  });
} else if (typeof module === 'object' && module && module.exports) {
  module.exports = __templateData;
} else {
  __templateData;
}
});

;require.register("skeletons", function(exports, require, module) {
var __templateData = function template(locals) {
var buf = [];
var jade_mixins = {};
var jade_interp;
;var locals_for_with = (locals || {});(function (filename, nav, undefined) {
buf.push("<!DOCTYPE html><html><head><meta charset=\"utf-8\"><meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge,chrome=1\"><title>Brunch - ultra-fast HTML5 build tool</title><meta name=\"description\" content=\"Brunch builds, lints, compiles, concatenates and shrinks your HTML5 app in an ultra-simple way. No more Grunt / Gulp mess.\"><meta name=\"viewport\" content=\"width=device-width, initial-scale=1\"><link rel=\"shortcut icon\" type=\"image/x-icon\" href=\"/favicon.ico\"><link rel=\"stylesheet\" href=\"styles/app.css\"><link rel=\"publisher\" href=\"https://plus.google.com/+PaulMillerLi\"><!--[if lt IE 9]>\n<script src=\"//html5shiv.googlecode.com/svn/trunk/html5.js\"></script>\n<![endif]--><script>/*! grunt-grunticon Stylesheet Loader - v2.1.6 | https://github.com/filamentgroup/grunticon | (c) 2015 Scott Jehl, Filament Group, Inc. | MIT license. */\n\n!function(){function e(e,n,t){\"use strict\";var o=window.document.createElement(\"link\"),a=n||window.document.getElementsByTagName(\"script\")[0],i=window.document.styleSheets;return o.rel=\"stylesheet\",o.href=e,o.media=\"only x\",a.parentNode.insertBefore(o,a),o.onloadcssdefined=function(e){for(var n,t=0;t<i.length;t++)i[t].href&&i[t].href===o.href&&(n=!0);n?e():setTimeout(function(){o.onloadcssdefined(e)})},o.onloadcssdefined(function(){o.media=t||\"all\"}),o}function n(e,n){e.onload=function(){e.onload=null,n&&n.call(e)},\"isApplicationInstalled\"in navigator&&\"onloadcssdefined\"in e&&e.onloadcssdefined(n)}!function(t){var o=function(a,i){\"use strict\";if(a&&3===a.length){var r=t.navigator,d=t.document,s=t.Image,c=!(!d.createElementNS||!d.createElementNS(\"http://www.w3.org/2000/svg\",\"svg\").createSVGRect||!d.implementation.hasFeature(\"http://www.w3.org/TR/SVG11/feature#Image\",\"1.1\")||t.opera&&-1===r.userAgent.indexOf(\"Chrome\")||-1!==r.userAgent.indexOf(\"Series40\")),l=new s;l.onerror=function(){o.method=\"png\",o.href=a[2],e(a[2])},l.onload=function(){var t=1===l.width&&1===l.height,r=a[t&&c?0:t?1:2];t&&c?o.method=\"svg\":t?o.method=\"datapng\":o.method=\"png\",o.href=r,n(e(r),i)},l.src=\"data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==\",d.documentElement.className+=\" grunticon\"}};o.loadCSS=e,o.onloadCSS=n,t.grunticon=o}(this)}();grunticon( [ \"/images/svg/icons.data.svg.css\", \"/images/svg/icons.data.png.css\", \"/images/svg/icons.fallback.css\" ] );</script></head><body><div id=\"navbar\"><div class=\"container\"><a href=\"/\" class=\"icon-brunch-logo-web\"></a><ul class=\"nav nav--main-nav\">");
// iterate nav
;(function(){
  var $$obj = nav;
  if ('number' == typeof $$obj.length) {

    for (var $index = 0, $$l = $$obj.length; $index < $$l; $index++) {
      var item = $$obj[$index];

var active = (filename == item.path + '.jade') || (filename == 'index.jade' && !item.path)
if ( item.path.indexOf('http') == 0)
{
buf.push("<li><a" + (jade.attr("href", item.path, true, true)) + (jade.cls(['nav__item--main-nav',active?'active':null], [null,true])) + ">" + (jade.escape(null == (jade_interp = item.title) ? "" : jade_interp)) + "</a></li>");
}
else
{
buf.push("<li><a" + (jade.attr("href", '/'+item.path+(item.path?'.html':''), true, true)) + (jade.cls(['nav__item--main-nav',active?'active':null], [null,true])) + ">" + (jade.escape(null == (jade_interp = item.title) ? "" : jade_interp)) + "</a></li>");
}
    }

  } else {
    var $$l = 0;
    for (var $index in $$obj) {
      $$l++;      var item = $$obj[$index];

var active = (filename == item.path + '.jade') || (filename == 'index.jade' && !item.path)
if ( item.path.indexOf('http') == 0)
{
buf.push("<li><a" + (jade.attr("href", item.path, true, true)) + (jade.cls(['nav__item--main-nav',active?'active':null], [null,true])) + ">" + (jade.escape(null == (jade_interp = item.title) ? "" : jade_interp)) + "</a></li>");
}
else
{
buf.push("<li><a" + (jade.attr("href", '/'+item.path+(item.path?'.html':''), true, true)) + (jade.cls(['nav__item--main-nav',active?'active':null], [null,true])) + ">" + (jade.escape(null == (jade_interp = item.title) ? "" : jade_interp)) + "</a></li>");
}
    }

  }
}).call(this);

buf.push("</ul></div></div><div class=\"page__content container\"><script>document.addEventListener('DOMContentLoaded', function() {\n  ReactDOM.render(React.createElement(require('scripts/skeletons'), null), document.getElementById('skeletons-body'));\n});\n</script><h1 id=\"skeletons\">Skeletons</h1>\n<p>A Brunch skeleton is basically an application boilerplate that provides a good starting point for new applications.</p>\n<p>Creating new application with any skeleton is pretty simple:</p>\n<pre><code># Simply create &quot;dead simple&quot; app without any opinions.\nbrunch new\n# Example from an URL.\nbrunch new -s paulmillr/brunch-with-chaplin\n# Same thing:\nbrunch new --skeleton https://github.com/paulmillr/brunch-with-chaplin\n# There are some aliases for popular skeletons:\nbrunch new custom-dir -s react\n</code></pre><p>Brunch doesn’t encourage you to use any particular technology,\nbut application skeletons can start you on your way with a specific pattern.</p>\n<p>The <a href=\"https://github.com/brunch/brunch/wiki/Skeletons\">complete skeletons list</a> is on GitHub. If you create your own open-source skeleton,\nfeel free to add it!</p>\n<div id=\"skeletons-body\"></div><footer><hr class=\"rule\"><p><small>Hosted on <a href=\"https://github.com/brunch/brunch.github.com\">GitHub Pages</a>. The content on this website is licensed under a <a rel=\"license\" href=\"http://creativecommons.org/licenses/by/3.0/deed.en_US\">CC BY 3.0</a>. Logo by <a href=\"http://helle.in\">Michael Hellein</a></small></p></footer></div><script src=\"scripts/app.js\"></script><script>require('scripts/app');\n</script>  <script type=\"text/javascript\">\n    var _gauges = _gauges || [];\n    (function() {\n      var t   = document.createElement('script');\n      t.type  = 'text/javascript';\n      t.async = true;\n      t.id    = 'gauges-tracker';\n      t.setAttribute('data-site-id', '4f1631bbcb25bc723b000007');\n      t.src = '//secure.gaug.es/track.js';\n      var s = document.getElementsByTagName('script')[0];\n      s.parentNode.insertBefore(t, s);\n    })();\n  </script>\n</body></html>");}.call(this,"filename" in locals_for_with?locals_for_with.filename:typeof filename!=="undefined"?filename:undefined,"nav" in locals_for_with?locals_for_with.nav:typeof nav!=="undefined"?nav:undefined,"undefined" in locals_for_with?locals_for_with.undefined:typeof undefined!=="undefined"?undefined:undefined));;return buf.join("");
};
if (typeof define === 'function' && define.amd) {
  define([], function() {
    return __templateData;
  });
} else if (typeof module === 'object' && module && module.exports) {
  module.exports = __templateData;
} else {
  __templateData;
}
});

;
//# sourceMappingURL=static.js.map