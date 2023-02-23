'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let callCounter = 0;

  return (operand1) => {
    return (operand2) => {
      callCounter++;

      if (
        (callCounter % 2 === 0 && callCounter > 3)
        || callCounter === 4
      ) {
        return 'Bzzz... Error!';
      }

      return operand1 + operand2;
    };
  };
}

module.exports = makeRobotAccountant;
