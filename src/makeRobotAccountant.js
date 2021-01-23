'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  // write code here
  let count = 0;

  return function(a) {
    return function(b) {
      count++;

      if (count <= 3) {
        return a + b;
      }

      if (count >= 4 && (count % 2 === 0)) {
        return `Bzzz... Error!`;
      }

      if (count >= 4 && (count % 2 !== 0)) {
        return a + b;
      }
    };
  };
}

module.exports = makeRobotAccountant;
