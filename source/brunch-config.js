var nav = [
  {title: 'Home', path: ''},
  {title: 'Docs', path: 'docs/getting-started', activeOn: 'docs/'},
  {title: 'Plugins', path: 'plugins'},
  {title: 'Skeletons', path: 'skeletons'},
  {title: 'In Production', path: 'examples'},
  {title: 'Community', path: 'support'}
];

var docSidebar = [
  {section: 'Quick Start', items: [
    {title: 'Getting started', path: 'getting-started'},
    {title: 'Core concepts', path: 'concepts'},
    {title: 'Why Brunch', path: 'why-brunch'},
    {title: 'Using plugins', path: 'using-plugins'},
    {title: 'Using JS modules and NPM', path: 'js-modules-npm'},
    {title: 'Testing', path: 'testing'},
    {title: 'Deploying', path: 'deploying'}
  ]},
  {section: 'Community Resources', items: [
    {title: 'The Brunch Guide', link: 'https://github.com/brunch/brunch-guide'}
  ]},
  {section: 'Reference', items: [
    {title: 'Commands', path: 'commands'},
    {title: 'Config', path: 'config'},
    {title: 'Plugin API', path: 'plugins'},
    {title: 'Changelog', link: 'https://github.com/brunch/brunch/blob/master/CHANGELOG.md'},
    {title: 'FAQ', path: 'faq'},
    {title: 'Troubleshooting', path: 'troubleshooting'}
  ]}
]

var social = [
  {
    classname: 'github',
    width: 160,
    src: 'http://ghbtns.com/github-btn.html?user=brunch&repo=brunch&type=watch&count=true&size=large'
  }, {
    classname: 'twitter',
    width: 260,
    src: 'https://platform.twitter.com/widgets/follow_button.html?screen_name=brunch&show_count=true&size=l'
  }
];

module.exports = {
  files: {
    javascripts: {joinTo: 'scripts/app.js'},
    templates: {joinTo: 'scripts/app.js'},
    stylesheets: {joinTo: 'styles/app.css'}
  },
  paths: {public: '..'},
  plugins: {
    babel: {presets: ['es2015', 'react']},
    jade: {locals: {nav: nav, social: social, docSidebar: docSidebar}},
    autoReload: {enabled: {css: true, js: false, assets: true}}
  }
};
