namespace :styles do
  desc "Clears the styles"
  task :clear do
    puts "*** Clearing styles ***"
    system "rm -Rfv stylesheets/*"
  end
  
  desc "Generates new styles"
  task :generate => :clear do
    puts "*** Generating styles ***"
    system "compass compile"
  end
  
end
