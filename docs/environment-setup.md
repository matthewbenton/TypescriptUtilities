# Getting you Environment Setup

## Install Typescript
npm install -g typescript

## Install Typings
npm install -g typings

## Install required libraries
npm install -g mocha
npm install -g sinon

## Install required Typings
typings install dt~mocha --global --save
typings install sinon --save
typings install dt~node --save --global

## Compile source and run tests
Run compile in visual studio code using CTRL + SHIFT + B
From the root directory run npm test
