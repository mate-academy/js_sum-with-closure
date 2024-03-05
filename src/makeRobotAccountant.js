'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let functionCount = 0;

  function getSum(a) {
    functionCount++;

    if (functionCount % 2 === 1 || functionCount <= 3) {
      return function(b) {
        const sum = a + b;

        return sum;
      };
    } else {
      return function(b) {
        return 'Bzzz... Error!';
      };
    }
  }

  return getSum;
}

module.exports = makeRobotAccountant;
