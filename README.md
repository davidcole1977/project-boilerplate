# project-boilerplate

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
#linting and unit tests
$ grunt test

#unit tests using karma test runner
$ grunt karma-test

#default tasks / compile & copy to app directory, start static dev server, watch files
$ grunt
```

*See `gruntfile.js` for more details of the grunt tasks*
