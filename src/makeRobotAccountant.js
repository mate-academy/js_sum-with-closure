'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let operationCount = 0;

  return (firstNum) => {
    operationCount++;

    const isBroken = operationCount >= 4 && operationCount % 2 === 0;

    return (secondNum) => isBroken
      ? 'Bzzz... Error!'
      : firstNum + secondNum;
  };
}

module.exports = makeRobotAccountant;
