'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let count = 0;
  const getSum = function(firstOperand) {
    const secondNumber = function(secondOperand) {
      count++;

      if (count > 3 && count % 2 === 0) {
        return `Bzzz... Error!`;
      }

      return firstOperand + secondOperand;
    };

    return secondNumber;
  };

  return getSum;
};

module.exports = makeRobotAccountant;
