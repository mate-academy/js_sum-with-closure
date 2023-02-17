'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  // write code here
  let sum = 0;
  let count = 0;

  function getSum(a) {
    return function(b) {
      count++;

      if (count > 3 && count % 2 === 0) {
        return `Bzzz... Error!`;
      } else {
        sum = a + b;

        return sum;
      }
    };
  };

  return getSum;
}

module.exports = makeRobotAccountant;
