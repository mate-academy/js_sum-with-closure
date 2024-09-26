'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let numberOfCalls = 0;

  function getSum(firstNumber) {
    return function(secondNumber) {
      numberOfCalls++;

      if (numberOfCalls > 3 && numberOfCalls % 2 === 0) {
        return 'Bzzz... Error!';
      }

      return firstNumber + secondNumber;
    };
  }

  return getSum;
}

module.exports = makeRobotAccountant;
