'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let operationCount = 0;

  return (firstNumber) => {
    return (secondNumber) => {
      operationCount++;

      if (operationCount < 4 || operationCount % 2 !== 0) {
        return firstNumber + secondNumber;
      }

      return 'Bzzz... Error!';
    };
  };
}

module.exports = makeRobotAccountant;
