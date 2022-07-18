'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let countOfCall = 0;

  return function(firstDigit) {
    return function(secondDigit) {
      countOfCall++;

      return (countOfCall > 3 && countOfCall % 2 === 0)
        ? 'Bzzz... Error!'
        : firstDigit + secondDigit;
    };
  };
}

module.exports = makeRobotAccountant;
