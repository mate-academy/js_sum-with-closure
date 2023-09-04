'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let callCount = 0;

  const robot = function(x) {
    return function(y) {
      callCount++;

      if (callCount > 3 && callCount % 2 === 0) {
        return 'Bzzz... Error!';
      }

      return x + y;
    };
  };

  return robot;
}

module.exports = makeRobotAccountant;
