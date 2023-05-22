'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let countOperations = 0;

  return function(firstNumber) {
    return function(secondNumber) {
      countOperations++;

      if (countOperations <= 3 || countOperations % 2 !== 0) {
        const result = firstNumber + secondNumber;

        return result;
      }

      return 'Bzzz... Error!';
    };
  };
}

module.exports = makeRobotAccountant;
