'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  // write code here
  let count = 0;

  const sum = function(x) {
    if (count === 4) {
      count = 2;
    }

    return function(y) {
      count++;

      return count === 4
        ? 'Bzzz... Error!'
        : x + y;
    };
  };

  return sum;
}

module.exports = makeRobotAccountant;
