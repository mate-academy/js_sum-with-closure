'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let counter = 0;

  return function(x) {
    return function(y) {
      counter++;

      const sum = (counter % 2 === 0 && counter > 3)
        ? 'Bzzz... Error!'
        : x + y;

      return sum;
    };
  };
}

module.exports = makeRobotAccountant;
