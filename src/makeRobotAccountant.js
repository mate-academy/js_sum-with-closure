'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  // write code here
  let calculationIndex = 0;

  return function(a) {
    if (calculationIndex < 3 || calculationIndex % 2 === 0) {
      calculationIndex += 1;

      return function(b) {
        return a + b;
      };
    }

    calculationIndex += 1;

    return function(b) { // This was necessary to fix "getSum is not a function"
      return 'Bzzz... Error!';
    };
  };
}

module.exports = makeRobotAccountant;
