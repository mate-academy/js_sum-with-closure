'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let callCounter = 0;

  return (firstOperand) => {
    callCounter++;

    if (callCounter > 3 && callCounter % 2 === 0) {
      return () => 'Bzzz... Error!';
    }

    return (secondOperand) => firstOperand + secondOperand;
  };
}

module.exports = makeRobotAccountant;
