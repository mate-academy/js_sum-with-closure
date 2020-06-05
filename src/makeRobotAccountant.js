'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let count = 0;

  return function(firstThreeCalls) {
    count++;

    return function(nextCalls) {
      return count % 2 === 0 && count > 3
        ? 'Bzzz... Error!'
        : firstThreeCalls + nextCalls;
    };
  };
}

module.exports = makeRobotAccountant;
