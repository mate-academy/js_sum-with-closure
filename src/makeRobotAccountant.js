'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let callCount = 0;

  return function(x) {
    callCount++;

    return function(y) {
      if (callCount % 2 === 0 && callCount > 3) {
        return `Bzzz... Error!`;
      };

      return x + y;
    };
  };
}

module.exports = makeRobotAccountant;
