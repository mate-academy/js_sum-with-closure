'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let count = 0;

  return function(firstNumber) {
    return function(secondNumber) {
      count++;

      if (count % 2 === 1 || count < 3) {
        return firstNumber + secondNumber;
      }

      return 'Bzzz... Error!';
    };
  };
}

module.exports = makeRobotAccountant;
