'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  // write code here
  let count = 0;

  function sum(x) {
    count++;

    return function(y) {
      if (count > 3 && count % 2 === 0) {
        return `Bzzz... Error!`;
      }

      return x + y;
    };
  }

  return sum;
}

module.exports = makeRobotAccountant;
