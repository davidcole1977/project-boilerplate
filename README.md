# project-boilerplate

This is the starter boilerplate I use for my own personal web-based projects, with a simple default directory structure, example 'placeholder' files, JS libraries, and grunt tasks set up for various essentials such as unit testing, linting, compiling CSS and managing JS dependencies 

Feel free to download / fork and use as you wish.

## Dependencies
* [grunt](http://gruntjs.com/)
* [node](https://nodejs.org/)

## Basic useage

Source files live in `src/`

The compiled app files are copied into `_app/` (don't edit anything in this folder directly, as the grunt default task wipes it clean every time)

Mocha unit tests live in `test/`

### Running the grunt tasks

```
npm install

#linting and unit tests
grunt test

#default tasks / compile & copy to app directory, start static dev server, watch files
grunt
```

*See gruntfile.js for more details of the grunt tasks*




## Release History:

### 1.0.0
* Basic directory structure set up
* file examples and grunt tasks set up, including JSHint, Mocha, Browserify, LibSass, copy, clean, watch
* Custom Grunt task 'serveStaticFiles' to spin up a very basic static dev server using Express
