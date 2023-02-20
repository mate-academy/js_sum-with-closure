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

      if (count % 2 === 0) {
        return `Bzzz... Error!`;
      } else {
        return x + y;
      }
    }
  }
}

module.exports = makeRobotAccountant;
