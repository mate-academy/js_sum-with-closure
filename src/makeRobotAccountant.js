'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  // write code here
  let counter = 1;

  return function(a) {
    return function(b) {
      if (typeof a !== 'number' || typeof b !== 'number') {
        return 'a and b must be numbers';
      }

      counter++;

      if (counter < 4 || counter % 2 === 0) {
        return a + b;
      } else {
        return 'Bzzz... Error!';
      }
    };
  };
}

module.exports = makeRobotAccountant;
