'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant(x, y) {
  let count = 0;

  function getSum(a) {
    return function(b) {
      count++;

      if (count > 3 && count % 2 === 0) {
        return `Bzzz... Error!`;
      } else {
        return a + b;
      }
    };
  };

  return getSum;
}

module.exports = makeRobotAccountant;
