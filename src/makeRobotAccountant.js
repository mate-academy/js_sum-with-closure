'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let callCount = 0;

  function getSum(x) {
    callCount++;

    return function(y) {
      if (callCount > 3 && callCount % 2 === 0) {
        return 'Bzzz... Error!';
      }

      return x + y;
    };
  }

  return getSum;
}

module.exports = makeRobotAccountant;
