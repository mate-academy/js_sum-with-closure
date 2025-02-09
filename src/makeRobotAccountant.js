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

      if (callCount > 3) {
        return callCount % 2 === 0 ? 'Bzzz... Error!' : a + b;
      }

      return a + b;
    };
  };
}

module.exports = makeRobotAccountant;
