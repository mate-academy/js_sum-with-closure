'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let count = 0;

  return (firstDigit) => {
    count++;

    return (secondDigit) => {
      return count > 3 && count % 2 === 0
        ? 'Bzzz... Error!'
        : firstDigit + secondDigit;
    };
  };
}

module.exports = makeRobotAccountant;
