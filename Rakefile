ssh_user = "micheil@brandedcode.com" # for rsync deployment
remote_root = "~/webapps/brandedcode/" # for rsync deployment

desc "Clears the Site Directory"
task :clear => 'styles:clear' do
  puts "*** Clearing Site Directory ***"
  system "rm -rf site/*"
end

task :images do
  puts "*** Adding Images Directory ***"
  system "cp -r src/_sass/images site/stylesheets/"
end


desc "Runs preview"
task :preview => [:clear, 'styles:generate', :images] do
  puts "*** Starting preview server ***"
  system "jekyll --server --auto"
end

desc "Builds the site"
task :build => [:clear, 'styles:generate', :images] do
  puts "*** Building the site ***"
  system "jekyll"
end

desc "Clears and generates new styles, builds and deploys"
task :deploy => :build do
  puts "*** Deploying the site ***"
  system("rsync -avz --delete site/* #{ssh_user}:#{remote_root}")
end

namespace :styles do
  desc "Clears the styles"
  task :clear do
    puts "*** Clearing styles ***"
    system "rm -Rfv site/stylesheets/*"
  end
  
  desc "Generates new styles"
  task :generate => :clear do
    puts "*** Generating styles ***"
    system "compass -u"
    system "cp -r src/_sass/images site/stylesheets/"
  end
end
