'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let operationCount = 0;

  const getSum = (firstNumber) => {
    return function(secondNumber) {
      operationCount++;

      if (operationCount < 3 || operationCount % 2 !== 0) {
        return firstNumber + secondNumber;
      }

      return 'Bzzz... Error!';
    };
  };

  return getSum;
}

module.exports = makeRobotAccountant;
