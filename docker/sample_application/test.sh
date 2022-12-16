#!/bin/sh
npm i
npm start&

health_check() {
  echo "Waiting NPM server to start..."
  until $(curl --output /dev/null --silent --head --fail http://localhost:3000); do
      printf '.'
      sleep 5
  done
  echo "Server started..."
}

health_check
echo "Killing npm server..."
pkill -f node
npm start&
health_check
cd sample_application_cypress
npm i
npm run cypress:run

