'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  // write code here
  let callCounter = 0;

  return function getSum(a) {
    return function(b) {
      callCounter++;

      if (callCounter < 3 || callCounter % 2 === 1) {
        return a + b;
      };

      return 'Bzzz... Error!';
    };
  };
}

module.exports = makeRobotAccountant;
