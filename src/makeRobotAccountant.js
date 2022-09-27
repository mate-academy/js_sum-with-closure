'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let operCounter = 0;

  return (firstValue) => {
    operCounter++;

    const isBroken = operCounter > 3 && operCounter % 2 === 0;

    return (secondValue) => isBroken
      ? 'Bzzz... Error!'
      : firstValue + secondValue;
  };
}

module.exports = makeRobotAccountant;
