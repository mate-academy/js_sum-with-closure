'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let count = 0;

  function getSum(x) {
    return function(y) {
      count++;

      const sum = x + y;

      if (count > 3 && count % 2 === 0) {
        return `Bzzz... Error!`;
      }

      return sum;
    };
  };

  return getSum;
}

module.exports = makeRobotAccountant;
