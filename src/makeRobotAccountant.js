'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let callCount = 0;
  const errorMessage = 'Bzzz... Error!';

  function getSum(a) {
    return function(b) {
      callCount++;

      if (callCount <= 3 || (callCount > 3 && callCount % 2 !== 0)) {
        return a + b;
      }

      return errorMessage;
    };
  }

  return getSum;
}

module.exports = makeRobotAccountant;
