'use strict';

/**
 *
 * @return {function}
 */
function makeRobotAccountant() {
  let callCount = 0;

  return function(x) {
    return function(y) {
      callCount += 1;

      if (callCount > 3 && callCount % 2 === 0) {
        return 'Bzzz... Error!';
      }

      return x + y;
    };
  };
}

module.exports = makeRobotAccountant;
