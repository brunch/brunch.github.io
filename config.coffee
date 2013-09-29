exports.config =
  # See http://brunch.io/#documentation for docs.
  files:
    javascripts:
      joinTo: 'scripts/app.js'
    templates:
      joinTo:
        'scripts/app.js': /^app\/views/
        # This dummy concatenation just convinces Brunch to compile our static Jade.
        # See: https://github.com/ilkosta/static-jade-brunch
        # TODO: Refactor to avoid this kind of hack, because it confuses auto-reload-brunch.
        'scripts/static.js': /^app\/.*.jade$/
  plugins:
    jade:
      locals:
        nav: [
          {title: 'Home', path: ''},
          {title: 'Examples', path: 'examples'},
          {title: 'Plugins', path: 'plugins'},
          {title: 'Skeletons', path: 'skeletons'},
          {title: 'Compare', path: 'compare'},
          {title: 'Support', path: 'support'},
        ]
        social:[
          {classname: 'github', width: 165, src: 'http://ghbtns.com/github-btn.html?user=brunch&repo=brunch&type=watch&count=true&size=large'},
          {classname: 'twitter', width: 188, src: 'https://platform.twitter.com/widgets/follow_button.html?screen_name=brunch&show_count=true&size=l'},
        ]
    autoReload:
      # Disabling js is a workaround to avoid the jade compilation race condition in auto-reload-brunch.
      enabled:
        css: on
        js: off
        assets: on
