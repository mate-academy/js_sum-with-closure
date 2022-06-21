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

      if (count <= 3) {
        return sum;
      }

      if (count % 2 !== 0) {
        return sum;
      }

      return `Bzzz... Error!`;
    };
  };

  return getSum;
}

module.exports = makeRobotAccountant;
