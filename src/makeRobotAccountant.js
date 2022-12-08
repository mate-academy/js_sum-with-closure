'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let sumCounter = 0;

  return function(x) {
    return function(y) {
      sumCounter++;

      const showError = sumCounter > 3 && sumCounter % 2 === 0;

      return showError ? `Bzzz... Error!` : x + y;
    };
  };
}

module.exports = makeRobotAccountant;
