```javascript
module.exports = {
  files: {
    javascripts: {
      joinTo: {
        'vendor.js': /^(?!app)/,
        'app.js': /^app/
      }
    },
    stylesheets: {joinTo: 'app.css'}
  },

  plugins: {
    babel: {presets: ['es2015', 'react']},
    postcss: {processors: [require('autoprefixer')]}
  }
};
```

`package.json`:

```javascript
{
  "devDependencies": {
    "brunch": "^2.8.0",
    "postcss-brunch": "^0.5.0",
    "autoprefixer": "^6.3.0",
    "sass-brunch": "^2.6.0",
    "uglify-js-brunch": "^2.0.0",
    "babel-brunch": "^6.0.0",
    "babel-preset-react": "^6.5.0"
  }
}
```

Both configs are functionally similar.

The example is meant to highlight the difference in terms of boilerplate for a pretty common front-end dev setup, as well as in terms of approaches (imperative vs declarative).

Take a look at [the docs](/docs/getting-started.html) to learn more about Brunch.
