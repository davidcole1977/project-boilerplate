var module = require('./module'),
    _ = require('lodash');

(function () {

  function onDOMReady () {
    window.console.log('ready :)');
  }

  document.addEventListener("DOMContentLoaded", onDOMReady);

})();
