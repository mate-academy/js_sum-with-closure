'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let countOperation = 0;

  return (firstValue) => {
    countOperation++;

    const isBroken = countOperation > 3 && countOperation % 2 === 0;

    return (secondValue) => isBroken
      ? 'Bzzz... Error!'
      : firstValue + secondValue;
  };
}

module.exports = makeRobotAccountant;
