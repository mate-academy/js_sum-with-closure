'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let operCounter = 0;

  return (firstValue) => {
    return (secondValue) => {
      operCounter++;

      return (operCounter > 3 && operCounter % 2 === 0)
        ? 'Bzzz... Error!'
        : firstValue + secondValue;
    };
  };
}

module.exports = makeRobotAccountant;
