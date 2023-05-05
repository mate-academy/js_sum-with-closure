'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let count = 0;

  return function firstCall(x) {
    return function secondCall(y) {
      count++;

      return count < 4 || count % 2 !== 0
        ? x + y
        : 'Bzzz... Error!';
    };
  };
}

module.exports = makeRobotAccountant;
