'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  const ERROR_MESSAGE = 'Bzzz... Error!';
  let numberOfOperations = 0;

  return function getSum(number1) {
    numberOfOperations++;

    return function(number2) {
      if (numberOfOperations > 3 && numberOfOperations % 2 === 0) {
        return ERROR_MESSAGE;
      }

      return number1 + number2;
    };
  };
}

module.exports = makeRobotAccountant;
