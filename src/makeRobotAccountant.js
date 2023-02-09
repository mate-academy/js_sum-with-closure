'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let counter = 0;

  return firstNumber => {
    return secondNumber => {
      counter++;

      return counter >= 4 && counter % 2 === 0
        ? 'Bzzz... Error!'
        : firstNumber + secondNumber;
    };
  };
}

module.exports = makeRobotAccountant;
