'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  const operationWithoutBug = 3;
  let useCount = 0;

  return firstOperand => {
    return secondOperand => {
      useCount++;

      if (useCount > operationWithoutBug && useCount % 2 === 0) {
        return 'Bzzz... Error!';
      }

      return firstOperand + secondOperand;
    };
  };
}

module.exports = makeRobotAccountant;
