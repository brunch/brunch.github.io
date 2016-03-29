var nav = [
  {title: 'Home', path: ''},
  {title: 'Docs', path: 'https://github.com/brunch/brunch/tree/master/docs'},
  {title: 'Guide', path: 'https://github.com/brunch/brunch/blob/master/docs/README.md'},
  {title: 'Plugins', path: 'plugins'},
  {title: 'Skeletons', path: 'skeletons'},
  {title: 'Examples', path: 'examples'},
  {title: 'Compare', path: 'compare'}
];

var social = [
  {
    classname: 'github',
    width: 160,
    src: 'http://ghbtns.com/github-btn.html?user=brunch&repo=brunch&type=watch&count=true&size=large'
  }, {
    classname: 'twitter',
    width: 260,
    src: 'https://platform.twitter.com/widgets/follow_button.html?screen_name=brunch&show_count=true&size=l'
  }, {
    classname: 'twitter',
    width: 130,
    src: 'http://platform.twitter.com/widgets/tweet_button.html?count=horizontal&id=twitter-widget-0&lang=en&original_referer=http%3A%2F%2Flocalhost%3A3333%2F&related=brunch&size=l&text=Brunch%20%7C%20HTML5%20application%20assembler&url=http%3A%2F%2Fbrunch.io&via=brunch" class="twitter-share-button twitter-tweet-button twitter-count-horizontal'
  }
];

module.exports = {
  files: {
    javascripts: {joinTo: 'scripts/app.js'},
    templates: {joinTo: 'scripts/app.js'}
  },
  paths: {public: '..'},
  plugins: {
    babel: {presets: ['es2015', 'react']},
    jade: {locals: {nav: nav, social: social}},
    autoReload: {enabled: {css: true, js: false, assets: true}}
  }
};
