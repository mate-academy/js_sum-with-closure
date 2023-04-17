'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  // write code here
  let calcIndex = 0;

  return function(a) {
    if (calcIndex < 3 || calcIndex % 2 === 0) {
      calcIndex += 1;

      return function(b) {
        return a + b;
      };
    }

    calcIndex += 1;

    return function(b) { // This was necessary to fix "getSum is not a function"
      return 'Bzzz... Error!';
    };
  };
}

module.exports = makeRobotAccountant;
