'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let callCount = 0;

  return function(a) {
    return function(b) {
      callCount++;

      if (callCount >= 4 && callCount % 2 === 0) {
        return 'Bzzz... Error!';
      }

      const summOfInts = a + b;

      return summOfInts;
    };
  };
}
module.exports = makeRobotAccountant;
