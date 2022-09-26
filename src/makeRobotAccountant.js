'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let callCounter = 0;

  return (firstNumber) => {
    return (secondNumber) => {
      callCounter++;

      return (callCounter >= 4 && callCounter % 2 === 0)
        ? 'Bzzz... Error!'
        : firstNumber + secondNumber;
    };
  };
}

module.exports = makeRobotAccountant;
