#!/bin/bash
#./buildScript.sh

brew install yarn \
    && npm install \
    && yarn install

npm install firebase \
    && npm install firebase-tools

cd functions/ \
    && npm install

mv src/example-config.js src/config.js