'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let callsCount = 0;

  function getSum(a) {
    return function(b) {
      callsCount++;

      if (callsCount > 3 && callsCount % 2 === 0) {
        return 'Bzzz... Error!';
      }

      return a + b;
    };
  }

  return getSum;
}

module.exports = makeRobotAccountant;
