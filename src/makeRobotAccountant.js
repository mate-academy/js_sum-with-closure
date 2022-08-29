'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let countCalls = 0;

  return function getSum(firstNumber) {
    countCalls++;

    let sumNumbers = firstNumber;

    return function(secondNumber) {
      if (countCalls <= 3 || countCalls % 2 !== 0) {
        sumNumbers += secondNumber;

        return sumNumbers;
      }

      if (countCalls > 3) {
        return 'Bzzz... Error!';
      }
    };
  };
}

module.exports = makeRobotAccountant;
