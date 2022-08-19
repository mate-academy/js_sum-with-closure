'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let countOfCalls = 0;
  const maxCalls = 4;

  function getSum(firstOperand) {
    return function(secondOperand) {
      countOfCalls++;

      if (countOfCalls >= maxCalls && countOfCalls % 2 === 0) {
        return 'Bzzz... Error!';
      }

      return firstOperand + secondOperand;
    };
  };

  return getSum;
}

module.exports = makeRobotAccountant;
