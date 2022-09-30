'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let callCounter = 0;

  return (firstNumber) => {
    callCounter++;

    const errorCondition = callCounter > 3 && (callCounter % 2 === 0);

    return (secondNumber) => errorCondition
      ? 'Bzzz... Error!'
      : firstNumber + secondNumber;
  };
}

module.exports = makeRobotAccountant;
