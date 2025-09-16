'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let callCount = 0;

  function getSum(a) {
    return function(b) {
      callCount++;

      if (callCount <= 3) {
        return a + b;
      }

      if (callCount % 2 === 0) {
        return 'Bzzz... Error!';
      } else {
        return a + b;
      }
    };
  }

  return getSum;
}

module.exports = makeRobotAccountant;
