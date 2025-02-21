'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let callCount = 0;

  return function getSum(a) {
    return function(b) {
      callCount++;

      const sum = a + b;

      if (callCount <= 3) {
        return sum;
      }

      return callCount % 2 === 0 ? 'Bzzz... Error!' : sum;
    };
  };
}

module.exports = makeRobotAccountant;
