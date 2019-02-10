# Procfile to use with foreman
web: bundle exec rails s
webpacker: NODE_ENV=production ./bin/webpack --watch --colors --progress
release: bundle exec rake db:migrate
