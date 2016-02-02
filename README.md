# devQuest

*Generated with [ng-poly](https://github.com/dustinspecker/generator-ng-poly/tree/v0.11.5) version 0.11.5*

## Project Meta
- Begin by forking this repo
- When you've finished your work, create a pull request for our review

## Setup
1. Install [Node.js](http://nodejs.org/)
 - This will also install npm.
1. Run `npm install -g bower gulp yo generator-ng-poly@0.11.5`
 - This enables Bower, Gulp, and Yeoman generators to be used from command line.
1. Run `npm install` to install this project's dependencies
1. Run `bower install` to install client-side dependencies
1. Use [generator-ng-poly](https://github.com/dustinspecker/generator-ng-poly) to create additional components

## Database Server
1. Run `npm install -g json-server`
1. Run `json-server --watch --port=3002 ./database/generate.js` to start the database server and generate the data

## Gulp tasks
- Run `gulp` to compile assets and watch your files
- Run `gulp build` to compile assets
- Run `gulp dev` to run the build task and setup the development environment
- Run `gulp unitTest` to run unit tests via Karma and to create code coverage reports
- Run `gulp webdriverUpdate` to download Selenium server standalone and Chrome driver for e2e testing
- Run `gulp e2eTest` to run e2e tests via Protractor
 - **A localhost must be running** - `gulp dev`