#!/bin/sh

set -e

cd docker
docker build . -t cypress-visual-regression-ressemble-js
docker run cypress-visual-regression-ressemble-js