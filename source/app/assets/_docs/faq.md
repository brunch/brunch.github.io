# Brunch: FAQ

<div class="toc-placeholder"></div>

## How to use Bower?

Brunch does support [Bower](http://bower.io), however NPM is becoming de-facto standard for front-end packages.
You may still want/need to use bower for some of your packages that aren't on NPM yet, or just copy these to `vendor`.

For more details on NPM integration, see the next section.

To add packages to your project:

* Make sure you have `bower.json`, which can be generated with `bower init`
* Add packages to the `dependencies` field of your `bower.json`
* Optionally specify the [`overrides` property](https://github.com/paulmillr/read-components#read-components) for packages without `bower.json`. This is needed because brunch automatically compiles bower dependencies in right order.
* Note that `overrides` do not impact Bower's behavior, so the original dependency graph will still be copied by `bower install`. But specifying `overrides` is effective for changing the dependencies that actually get built into your project.

As for now, you can solve it in different ways - by using `npm post-install` script, `onCompile` handler in config `hooks` etc.

```json
"scripts": {
  "postinstall": "cp -r node_modules/font-awesome/fonts public/fonts"
}
```

You can override some dependent package manifest using `overrides` attribute in `package.json` / `bower.json`.

Be aware, that `main` attribute in `package.json` is a string, but array in `bower.json`.

```json
"dependencies": {
  "some-awesome-package": "~0.0.1"
},
"overrides": {
  "some-awesome-package": {
    "main": "./lib/just_one_component.js"
  }
}
```

<a name="jointo"></a>
## I want to create a separate JavaScript output. What's the best way?

Sometimes it's useful to create separate JS files for bookmarklets etc. Use this joinTo config. It will compile all files in `app/` (except in `app/namespace`) to one file and all files in `app/namespace` to another.

```javascript
joinTo: {
  'javascripts/namespace.js': /^app(\/|\\)namespace/
  'javascripts/app.js': /^app(\/|\\)(?!namespace)/
  'javascripts/vendor.js': /^(?!app)/
}
```
