'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let count = 0;

  return function(a) {
    return function(b) {
      count++;

      if (count < 4 || count % 2 !== 0) {
        return a + b;
      } else {
        return 'Bzzz... Error!';
      }
    };
  };
}

module.exports = makeRobotAccountant;
