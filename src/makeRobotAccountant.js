'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let callCount = 0;

  function getSum(a) {
    callCount++;

    return function(b) {
      if (callCount > 3 && callCount % 2 === 0) {
        return 'Bzzz... Error!';
      }

      return a + b;
    };
  }

  return getSum;
}

module.exports = makeRobotAccountant;
