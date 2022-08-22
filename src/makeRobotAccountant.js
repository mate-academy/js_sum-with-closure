'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let callCount = 0;

  return function(x) {
    return function(y) {
      callCount++;

      return (callCount < 4 || callCount % 2 === 1)
        ? x + y
        : 'Bzzz... Error!';
    };
  };
}

module.exports = makeRobotAccountant;
