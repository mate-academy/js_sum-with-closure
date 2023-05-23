'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let total = 0;

  function getSum(a) {
    total++;

    function sum(b) {
      if (total <= 3 || !Number.isInteger(total / 2)) {
        return a + b;
      }

      if (Number.isInteger(total / 2) && total > 3) {
        return 'Bzzz... Error!';
      }
    }

    return sum;
  }

  return getSum;
}

module.exports = makeRobotAccountant;
