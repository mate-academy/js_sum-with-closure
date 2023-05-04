'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let callCount = 0;

  return function getSum(x) {
    return function(y) {
      callCount++;

      if (callCount > 3) {
        if (callCount % 2 === 0) {
          return 'Bzzz... Error!';
        }
      }

      return x + y;
    };
  };
}

module.exports = makeRobotAccountant;
