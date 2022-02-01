'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  // write code here
  let calls = 0;

  function calculate(x) {
    function getSum(y) {
      calls++;

      if (calls <= 3 || (calls % 2) !== 0) {
        return x + y;
      }

      return 'Bzzz... Error!';
    }

    return getSum;
  }

  return calculate;
}

module.exports = makeRobotAccountant;
