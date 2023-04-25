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

      if (count <= 3) {
        return x + y;
      }

      return (count % 2 === 0)
        ? 'Bzzz... Error!'
        : x + y;
    };
  };
}

module.exports = makeRobotAccountant;
