.DEFAULT_TARGET := icons

icons:
	node -e "var G = require('grunticon-lib'); new G(['src/svg/brunch-icon-mark.svg', 'src/svg/brunch-logo-napkin.svg', 'src/svg/brunch-logo-web.svg'], 'app/assets/images/svg/', {svgo: true, pngpath: '/images/svg/png'}).process(process.exit)"

skeletons:
	cp node_modules/brunch-skeletons/skeletons.json app/assets/skeletons.json
