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
      }

      return a + b;
    };
  }

  return function(a) {
    return getSum(a);
  };
}

module.exports = makeRobotAccountant;
