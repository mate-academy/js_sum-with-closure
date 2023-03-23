'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let count = 0;

  return function getSum(x) {
    count++;

    return function(y) {
      return count > 3 && count % 2 === 0
        ? 'Bzzz... Error!'
        : x + y;
    };
  };
}

module.exports = makeRobotAccountant;
