'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let count = 0;

  const getSum = function(num1) {
    const getSum2 = function(num2) {
      count++;

      if (count >= 4 && count % 2 === 0) {
        return `Bzzz... Error!`;
      }

      return num1 + num2;
    };

    return getSum2;
  };

  return getSum;
}

module.exports = makeRobotAccountant;
