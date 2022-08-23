'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  // write code here
  let countOfCalls = 0;

  function getSum(firstOperand) {
    return function(secondOperand) {
      countOfCalls++;

      if (countOfCalls >= 4 && countOfCalls % 2 === 0) {
        return 'Bzzz... Error!';
      }

      return firstOperand + secondOperand;
    };
  };

  return getSum;
}

module.exports = makeRobotAccountant;
