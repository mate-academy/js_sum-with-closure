'use strict';

function sum(a) {
  return function(b) {
    return a + b;
  };
}

module.exports = sum;
