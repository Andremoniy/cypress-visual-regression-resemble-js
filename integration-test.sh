#!/bin/sh

set -e

cd docker
docker build . -t cypress-visual-regression-resemble-js
docker run cypress-visual-regression-resemble-js