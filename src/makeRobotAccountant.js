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

      if (count <= 3 || count % 2 !== 0) {
        return a + b;
      }

      return 'Bzzz... Error!';
    };
  };
}

module.exports = makeRobotAccountant;
