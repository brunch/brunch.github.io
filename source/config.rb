# 
# We're using the `compass watch` command to place compiled CSS
# in app/assets, instead of using sass-brunch, which is
# unfortunately slow: https://github.com/brunch/sass-brunch/issues/22
# 

http_path = "/"
css_dir = "app/assets/styles"
sass_dir = "app/styles"
images_dir = "app/images"
javascripts_dir = "app/scripts"

output_style = :compact
line_comments = false
preferred_syntax = :sass

additional_import_paths = ['bower_components']