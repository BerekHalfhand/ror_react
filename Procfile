# Procfile to use with heroku
web: bundle exec rails s
webpacker: NODE_ENV=production ./bin/webpack --watch --colors --progress
release: bundle exec rake db:migrate
