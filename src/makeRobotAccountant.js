'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let count = 0;

  const sum = function(a) {
    return function(b) {
      count++;

      if (count > 3) {
        if (count % 2 === 0) {
          return 'Bzzz... Error!';
        } else {
          return a + b;
        }
      }

      return a + b;
    };
  };

  return sum;
}

module.exports = makeRobotAccountant;
