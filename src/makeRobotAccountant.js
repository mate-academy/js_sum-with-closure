'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let callCounter = 0;

  return function(a) {
    callCounter++;

    if (callCounter <= 3) {
      return function(b) {
        return a + b;
      };
    } else if (callCounter % 2 === 0) {
      return function() {
        return 'Bzzz... Error!';
      };
    } else {
      return function(b) {
        return a + b;
      };
    }
  };
}

module.exports = makeRobotAccountant;
