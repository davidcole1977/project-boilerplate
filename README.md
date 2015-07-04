# project-boilerplate

[![Build Status](https://travis-ci.org/davidcole1977/project-boilerplate.svg)](https://travis-ci.org/davidcole1977/project-boilerplate) [![Coverage Status](https://coveralls.io/repos/davidcole1977/project-boilerplate/badge.svg?branch=master)](https://coveralls.io/r/davidcole1977/project-boilerplate?branch=master)

> A starter boilerplate for web and JS projects with a simple default directory structure, example 'placeholder' files, JS libraries, and grunt tasks set up for various essentials such as unit testing, linting, compiling CSS and managing JS dependencies

## Dependencies
* [grunt](http://gruntjs.com/)
* [node](https://nodejs.org/)

## Basic useage

Source files live in `src/`

The compiled app files are copied into `_app/` (don't edit anything in this folder directly, as the grunt default task wipes it clean every time)

Unit tests live in `test/`

### Set up

```shell
$ npm install
```

### Running the grunt tasks

```shell
#default tasks / compile & copy to app directory, test, start static dev server, watch files
$ grunt

#distribution / CI server tasks
$ grunt dist
```

*See `gruntfile.js` for more details of the grunt tasks*

## known issues
* There are separate grunt tasks for unit testing server-side node javascript (using mochaTest) and client-side browserified javascript (using karma with browserify plugins). The two key issues relating to this are:
** There isn't yet code coverage for the tests run using karma.
** Currently only the node/mochaTest coverage results are sent to coveralls