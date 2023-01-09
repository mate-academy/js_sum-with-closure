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

      return count > 2 && count % 2 === 0
        ? `Bzzz... Error!`
        : a + b;
    };
  };
}

module.exports = makeRobotAccountant;
