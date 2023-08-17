'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let count = 0;

  function getSum(a) {
    count++;

    return function(b) {
      if (count > 3 && count % 2 === 0) {
        return 'Bzzz... Error!';
      }

      const sum = a + b;

      return sum;
    };
  }

  return getSum;
}

module.exports = makeRobotAccountant;
