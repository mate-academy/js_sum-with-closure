'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let count = 0;

  return function(y) {
    count++;

    return function(x) {
      const oddCase = count % 2 === 0;

      return count > 3 && oddCase
        ? 'Bzzz... Error!'
        : x + y;
    };
  };
}

module.exports = makeRobotAccountant;
