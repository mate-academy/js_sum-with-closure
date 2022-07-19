'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let count = 0;

  return function(x) {
    return function(y) {
      count++;

      const amount = (count % 2 === 0 && count > 3)
        ? 'Bzzz... Error!'
        : x + y;

      return amount;
    };
  };
}

module.exports = makeRobotAccountant;
