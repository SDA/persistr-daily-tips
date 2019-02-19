import styles from './../css/main.css';


// NOTE: TO use Jquery, just call the modules you want
// var $ = require('jquery/src/core');
// require('jquery/src/core/init');
// require('jquery/src/manipulation');

// OR, use all of them
// var $ = require('jquery/src/jquery');

// And write your code
// $('body').append('<p>Jquery is working</p>');
//
// You can also "require" any script from its location in the node modules folder. Webpack often knows what to look for, but you can add a script directly like this:
// var javascriptthingy = require('name/folder/file.js');

function ready(fn) {
  if (document.attachEvent ? document.readyState === "complete" : document.readyState !== "loading") {
    fn();
  } else {
    document.addEventListener('DOMContentLoaded', fn);
  }
}

ready(function() {
  var $features = new Object();
  var $html = document.documentElement;
  $features.svg = document.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#Image", "1.1");

  if ($features.svg) {
    var elements = document.querySelectorAll('img[src$=".svg.png"]');
    Array.prototype.forEach.call(elements, function(el, i) {
      el.setAttribute('src', el.getAttribute('src').replace(/\.png$/, ''));
    });
  }
});
