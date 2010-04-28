# # Require any additional compass plugins here.
# # Set this to the root of your project when deployed:
# http_path = "/"
# css_dir = "site/stylesheets"
# sass_dir = "src/_sass"
# images_dir = "site/images"
# javascripts_dir = "site/javascripts"
# output_style = :compressed
# line_comments = false
# # To enable relative paths to assets via compass helper functions. Uncomment:
# # relative_assets = true

ROOT = File.join(File.dirname(__FILE__), '/')
puts "Site root is: " + File.expand_path(ROOT)

output_style = :expanded
project_path = ROOT               # must be set for Compass to work 
sass_dir     = "src/_sass"  # dir containing Sass / Compass source files
http_path    = "/"                # root when deployed
css_dir      = "site/stylesheets" # final CSS
images_dir   = "site/images"      # final images
http_images_path = "/images"