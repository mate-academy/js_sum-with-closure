'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant(a) {
  let callCount = 0;
  return function (b) {
    callCount++;

    if (callCount < 3) {
      return a + b;
    }

    if (callCount % 2 !== 0) {
      return a + b;
    }

    return 'Bzzz... Error!';
  };
}

module.exports = makeRobotAccountant;
