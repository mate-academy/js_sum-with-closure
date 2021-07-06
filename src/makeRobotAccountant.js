'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let callsCounter = 0;

  return leftOperand => {
    return rightOperand => {
      callsCounter++;

      return (callsCounter > 3 && callsCounter % 2 === 0)
        ? 'Bzzz... Error!'
        : leftOperand + rightOperand;
    };
  };
}

module.exports = makeRobotAccountant;
