'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let operationsCounter = 0;

  return function(x) {
    return function(y) {
      operationsCounter++;

      return (operationsCounter <= 3 || (operationsCounter % 2) !== 0)
        ? x + y
        : 'Bzzz... Error!';
    };
  };
}

module.exports = makeRobotAccountant;
