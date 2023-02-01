'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let count = 0;

  return function(x) {
    return function(y) {
      count++;

      return count % 2 === 0 && count > 3 ? 'Bzzz... Error!' : x + y;
    };
  };
}

module.exports = makeRobotAccountant;
