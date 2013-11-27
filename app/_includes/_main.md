Installation is one-line, once you have
[node.js](http://nodejs.org/download/). In your console, run:

    npm install -g brunch

## Getting started

#### Create a new Brunch project:

    brunch new <skeleton-path-or-URI> [optional-output-dir]

`skeleton-path-or-URI` specifies a [skeleton](/skeletons.html) from which your application will be initialized.

See the [README](https://github.com/brunch/brunch/blob/stable/docs/README.md) for a complete description of app structure.

#### Develop with Brunch:

    brunch watch --server

tells Brunch to watch your project and incrementally rebuild it when source files are changed. The optional `server` flag launches a simple web server with [pushState](http://diveintohtml5.info/history.html) support.

If you use OS X and want brunch to show system notification every time compilation error happens, you will need to install [terminal-notifier](https://github.com/alloy/terminal-notifier): `[sudo] gem install terminal-notifier`.

#### Build with Brunch:

    brunch build --production

builds a project for distribution. The optional `production` flag enables minification.

## A Quick Demo

See the <a href="http://vimeo.com/61056660">video that shows starting new app with Brunch</a>:

<iframe src="http://player.vimeo.com/video/61056660" style="width: 100%; height: 400px" frameborder="0" webkitAllowFullScreen mozallowfullscreen allowFullScreen></iframe>

<h2>Deploying</h2>

<p>
  Brunch-generated applications are a bunch of simple static files. You can
  host them everywhere, even on free hostings, like
  <a href="http://help.github.com/pages/">GitHub pages</a>.

  Because production environments are usually
  slightly different than development envs,
  brunch has <code>optimize</code> option.
</p>

<p>To build application that has minified JS and CSS, execute <code>brunch build --optimize</code>. Then you can deploy it:</p>

<ul>
  <li>
    If you use <strong>static hosting site</strong>: build your application
    at your machine and just upload <code>public/</code>
    directory to the directory that is served by a webserver.
  </li>
  <li>
    If you use <strong>hosting that supports node.js</strong>, you can
    install brunch there and auto-build app every time.
  </li>
  <li>
    If you prefer <a href="http://heroku.com/">Heroku</a>,
    there is <a href="https://gist.github.com/3596447">a nice small guide</a>
    on deploying.
    Should work even on free instances.
  </li>
  <li>
    If you’re into
    <a href="http://help.github.com/pages/">GitHub pages</a>,
    you’ll need to build your app,
    move <code>public/</code> directory to somewhere,
    <a href="http://git-scm.com/book/en/Git-Branching-Basic-Branching-and-Merging">switch to <code>gh-pages</code>
    git branch</a>,
    remove files from directory and move files from your temporary
    dir here.
  </li>
</ul>

<h2>Documentation</h2>

<p>All docs are available <a href="https://github.com/brunch/brunch/tree/stable/docs">on GitHub</a>. Also take a look at <a href="https://github.com/brunch/brunch/wiki/Examples,-articles-and-tutorials">articles, tutorials and talks</a>.</p>

<h2>Compare table</h2>

<div class="compare-link-container">
  <a class="compare-link" id="compare" name="compare" href="#compare">h</a>
</div>

<p>
  Brunch is similar to <a href="http://gruntjs.com">Grunt</a>, LiveReload and CodeKit.
  And it’s also different.
</p>

<p>LiveReload and CodeKit partly resemble Brunch compilation pipeline, file watching and auto reloading, but they don’t support advanced features like modules, Bower support or source maps generation</p>

<p>Grunt task manager is in some ways more flexible than Brunch, but its flexibility and explicitness can quickly become complexity.</p>

<table class="compare-builders">
  <tr>
    <th>Feature</th>
    <th>Brunch</th>
    <th>Grunt</th>
    <th>Rails asset pipeline</th>
    <th>Comment</th>
  </tr>
  <tr>
    <th>Builder, linter, concatenator, minifier</th>
    <td class="has-feature">✓</td>
    <td class="has-feature">✓</td>
    <td class="has-feature">✓</td>
    <td>Brunch can compile your JS, CoffeeScript, Stylus, Sass (+ Compass), LESS, Mustache, Handlebars, Jade, Eco (and much more) files, concatenate output to and minify it. It just doesn’t care about languages or frameworks you use.</td>
  </tr>
  <tr>
    <th>File watcher</th>
    <td class="has-feature">✓</td>
    <td class="has-feature">✓</td>
    <td class="has-feature">✓</td>
    <td>Brunch recompiles and concats all your stuff automatically on any change, headlessly. No more need in compicated Makefiles and watchers.</td>
  </tr>
  <tr>
    <th>Auto-reload</th>
    <td class="has-feature">✓</td>
    <td class="has-feature">✓</td>
    <td class="has-feature">✓</td>
    <td>Brunch reloads your browser window every time you change stuff (with autoreload plugin)</td>
  </tr>
  <tr>
    <th>Framework-agnostic</th>
    <td class="has-feature">✓</td>
    <td class="has-feature">✓</td>
    <td class="hasnt-feature">✗</td>
    <td>Brunch just doesn’t care about stuff you’re using for structure. You can use any backend you like, be it node.js, Rails or Lift. You can even keep frontend and backend as separate projects.</td>
  </tr>
  <tr>
    <th>Auto-support for modules</th>
    <td class="has-feature">✓</td>
    <td class="has-feature">✓</td>
    <td class="hasnt-feature">✗</td>
    <td>All script and template files may be wrapped in modules (CommonJS or AMD) to prohibit global public access and encapsulate code. Brunch may also do the job of r.js optimizer automatically.</td>
  </tr>
  <tr>
    <th>Skeletons / boilerplates</th>
    <td class="has-feature">✓</td>
    <td class="has-feature">✓</td>
    <td class="hasnt-feature">✗</td>
    <td>Brunch can generate your project from predefined template. There’s a lot of great skeleton projects you can use already.</a></td>
  </tr>
  <tr>
    <th>Blazing fast</th>
    <td class="has-feature">✓</td>
    <td class="hasnt-feature">✗</td>
    <td class="hasnt-feature">✗</td>
    <td>Speed is important for app watchers. Usual brunch compilation takes less time than you need to alt-tab to browser window. Unlike Grunt, Brunch recompiles only changed parts of your app and extensively uses caching for others.</td>
  </tr>
  <tr>
    <th>Incredibly simple</th>
    <td class="has-feature">✓</td>
    <td class="hasnt-feature">✗</td>
    <td class="hasnt-feature">✗</td>
    <td>All you need to do with Brunch is run one command and everything will be managed for you, without need to write <a href="https://gist.github.com/paulmillr/3697384">sophisticated 300LOC build configs</a>.</td>
  </tr>
  <tr>
    <th>Headless <a href="http://bower.io">Bower</a> integration</th>
    <td class="has-feature">✓</td>
    <td class="hasnt-feature">✗</td>
    <td class="hasnt-feature">✗</td>
    <td>Brunch supports <a href="https://github.com/brunch/brunch/blob/stable/docs/faq.md#how-to-use-bower">headless integration</a> with Bower package manager. Unlike with Grunt, you don’t need to specify all used files in details — brunch will auto-detect them in most cases and automatically concat in correct order</td>
  </tr>
  <tr>
    <th>Headless source maps generation</th>
    <td class="has-feature">✓</td>
    <td class="hasnt-feature">✗</td>
    <td class="hasnt-feature">✗</td>
    <td>Brunch automatically generates source maps for all your files so debugging becomes very simple even when all files are concatenated and minified. <!--Brunch simply generates even sophisticated source maps (compile coffeescript and templates -> concatenate all files -> minify with uglify.js)--></td>
  </tr>
  <tr>
    <th>Cross-platform and free</th>
    <td class="has-feature">✓</td>
    <td class="has-feature">✓</td>
    <td class="has-feature">✓</td>
    <td>Brunch is free, both as in beer and as in speech and works everywhere.</td>
  </tr>
</table>

<h2>Brought to you by</h2>

<p class="builders">
  <a href="http://paulmillr.com/" rel="author"><img src="https://secure.gravatar.com/avatar/d342e4ef045c54a6a6f41d070d8a0406?s=140&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-140.png" width="48" alt="Paul Miller">
   <span class="name">Paul</span> Miller</a>

  <a href="http://nikgraf.com/"><img src="https://secure.gravatar.com/avatar/8fc75580dbacd91ff28514b68baf1a8a?s=140&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-140.png" width="48" alt="Nik Graf">
   <span class="name">Nik</span> Graf</a>

  <a href="http://ramen.io/"><img src="https://secure.gravatar.com/avatar/37c5132eed30539456c79906dd8c6065?s=140&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-140.png" width="48" alt="Thomas Schranz">
   <span class="name">Thomas</span> Schranz</a>

  <a href="https://github.com/es128"><img src="https://secure.gravatar.com/avatar/c8c06173c01b4e95594e4af3a8a815f1?s=140&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-140.png" width="48" alt="Elan Shanker">
   <span class="name">Elan</span> Shanker</a>
</p>
