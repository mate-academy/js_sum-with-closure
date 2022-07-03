'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let count = 0;
  const getSum = function(a = 0) {
    const sum = function sum(b = 0) {
      count++;

      if (count <= 3) {
        return a + b;
      }

      if (count > 3 && count % 2 === 0) {
        return `Bzzz... Error!`;
      }

      return a + b;
    };

    return sum;
  };

  return getSum;
}

module.exports = makeRobotAccountant;
