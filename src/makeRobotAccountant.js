'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let count = 0;

  return function(number) {
    return function(argument) {
      count++;

      return count > 3 && count % 2 === 0
        ? 'Bzzz... Error!'
        : argument + number;
    };
  };
}

module.exports = makeRobotAccountant;
