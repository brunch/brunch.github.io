# Why Brunch... And not Webpack, Grunt, or Gulp

<div class="toc-placeholder"></div>

## Philosophy behind Brunch

Brunch was built with two things in mind: **speed** and **simplicity**.

You will find that the [typical config of a Brunch application](https://github.com/brunch/with-react/blob/master/brunch-config.js) is an order of magnitude simpler, compared to Webpack, [Grunt](https://gist.github.com/paulmillr/eb3ae139aadbbb87ab9b#file-grunt-js), or [Gulp](https://gist.github.com/paulmillr/eb3ae139aadbbb87ab9b#file-gulp-js).

And that the time it takes to perform a fresh compilation?
It's times faster.
Even more so if you run the watcher — it will only rebuild what was changed, not everything, getting you incremental compilations in under 500ms.
(Obviously, you don't have to take our word for it. See [this story](https://github.com/brunch/brunch/issues/1234) shared with us by a webpack user.)

In order to achieve both goals, Brunch does have to make certain assumptions about your application, and thus be opinionated.
See the [core concepts page](/docs/concepts.html) for more on this.

Besides configs, brunch is also **simpler in terms of commands**.
Grunt / Gulp commands replicate all plugins it loads.
Brunch always has three commands: `new`, `build` and `watch`.
Build / watch commands may receive optional `production` flag which will tell Brunch to optimize assets, javascripts and stylesheets.

You can find a more in-depth discussion of what sets Brunch apart in [chapter 1 of the community-contributed guide](https://github.com/brunch/brunch-guide/blob/master/content/en/chapter01-whats-brunch.md#readme).

## Brunch vs Webpack

Webpack has been gaining quite some popularity lately.
Wondering how it compares with Brunch?

Where both are similar:

* module support is first-class
* have Hot Module Replacement ([`hmr-brunch`](http://github.com/brunch/hmr-brunch))
* have a notion of "compiler" / "loader" (although loaders are more than that)
* can `require` stylesheets

What Brunch can't do that Webpack can:

* asynchronous module loading / code splitting — brunch does have entry points functionality and can produce several js bundles though
* have clever processing of non-js/non-css assets

Unlike Webpack, Brunch:

* does not make you specify how to compile a file, every time you use it. Just add a compiler plugin and everything will Just Work™
* achieves faster build times

## Brunch vs Grunt/Gulp

These are more of task runners that allow you to create custom pipelines with lots of code.
Imperative.

To get first-class module support you would have to additionally configure and use Browserify or similar.

But even then, your rebuilds during `watch` won't be incremental — they will always start afresh and be slow.

## Feature comparison

Brunch is similar to [Grunt](http://gruntjs.com), LiveReload and CodeKit.

And it’s also different.

LiveReload and CodeKit partly resemble Brunch compilation pipeline, file watching and auto reloading, but they don’t support advanced features like modules, Bower support or source maps generation

Grunt task manager is in some ways more flexible than Brunch, but its flexibility and explicitness can quickly become complexity.

<table>
  <tr>
    <th>Feature</th>
    <th>Brunch</th>
    <th>Grunt</th>
    <th><span title="The Rails asset pipeline">Rails</span></th>
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
    <td>Brunch recompiles and concats all your stuff automatically on any change, headlessly. No more need in complicated Makefiles and watchers.</td>
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
    <td>Brunch supports <a href="https://github.com/brunch/brunch/blob/master/docs/faq.md#how-to-use-bower">headless integration</a> with Bower package manager. Unlike with Grunt, you don’t need to specify all used files in details — brunch will auto-detect them in most cases and automatically concat in correct order</td>
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
