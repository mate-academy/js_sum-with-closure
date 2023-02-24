'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant(x) {
  let count = 0;

  return function(a) {
    return function(b) {
      count++;

      if (count <= 3) {
        return a + b;
      }

      if (count % 2 === 0) {
        return `Bzzz... Error!`;
      } else {
        return a + b;
      }
    };
  };
}

module.exports = makeRobotAccountant;
