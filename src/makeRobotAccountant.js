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

      const isError = callCount > 3 && callCount % 2 === 0;

      return isError ? 'Bzzz... Error!' : a + b;
    };
  };
}

module.exports = makeRobotAccountant;
