'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let counter = 0;

  return function(firstDigit) {
    return function(secondDigit) {
      counter++;

      return counter > 3 && counter % 2 === 0
        ? 'Bzzz... Error!'
        : firstDigit + secondDigit;
    };
  };
}

module.exports = makeRobotAccountant;
