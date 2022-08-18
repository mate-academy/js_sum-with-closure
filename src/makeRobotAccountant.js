'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let countOfCalls = 0;

  function getSum(firstOperand) {
    return function(secondOperand) {
      countOfCalls++;

      if (countOfCalls >= 4 && countOfCalls % 2 === 0) {
        return 'Bzzz... Error!';
      } else {
        return firstOperand + secondOperand;
      }
    };
  };

  return getSum;
}

module.exports = makeRobotAccountant;
