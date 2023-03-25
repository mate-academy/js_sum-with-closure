'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let count = 0;

  return firstNumber => {
    return secondNumber => {
      count++;

      return count < 4 || count % 2
        ? firstNumber + secondNumber
        : 'Bzzz... Error!';
    };
  };
}

module.exports = makeRobotAccountant;
