'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let operationCounter = 0;

  function addition(x) {
    return function(y) {
      operationCounter++;

      if (operationCounter % 2 === 0 && operationCounter >= 4) {
        return 'Bzzz... Error!';
      } else {
        return x + y;
      }
    };
  }

  return addition;
}

module.exports = makeRobotAccountant;
