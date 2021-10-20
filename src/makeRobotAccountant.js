'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let callCount = 0;

  return (firstOperand) => {
    return (secondOperand) => {
      callCount++;

      return callCount > 3 && callCount % 2 === 0
        ? 'Bzzz... Error!'
        : firstOperand + secondOperand;
    };
  };
}

module.exports = makeRobotAccountant;
