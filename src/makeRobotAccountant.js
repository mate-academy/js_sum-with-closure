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

      const result = a + b;

      if (callCount <= 3) {
        return result;
      }

      if (callCount % 2 === 0) {
        return 'Bzzz... Error!';
      }

      return result;
    };
  };
}

module.exports = makeRobotAccountant;
