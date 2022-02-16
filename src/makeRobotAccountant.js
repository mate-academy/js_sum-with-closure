'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let useCount = 0;

  return firstOperand => {
    return secondOperand => {
      useCount++;

      if (useCount > 3 && useCount % 2 === 0) {
        return 'Bzzz... Error!';
      }

      return firstOperand + secondOperand;
    };
  };
}

module.exports = makeRobotAccountant;
