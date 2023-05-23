'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let operationCounter = 0;

  return function getSum(a) {
    operationCounter++;
    return (b) => (operationCounter > 3 && operationCounter % 2 === 0
      ? 'Bzzz... Error!'
      : a + b
    );
  }
}

module.exports = makeRobotAccountant;
