'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let count = 0;

  function sum(x) {
    return function(y) {
      if (count < 3) {
        count++;

        return x + y;
      }
      count--;

      return `Bzzz... Error!`;
    };
  }

  return sum;
}

module.exports = makeRobotAccountant;
