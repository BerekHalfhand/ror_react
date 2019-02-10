# Procfile to use with heroku
web: bundle exec puma -t 5:5 -p ${PORT:-3000} -e ${RACK_ENV:-production}
webpacker: NODE_ENV=production ./bin/webpack --watch --colors --progress
release: bundle exec rake db:migrate
