'use strict';
// # Sum with a closure
/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let count = 0;

  function getSum(num1) {
    return function(num2) {
      count++;

      return count > 3 && count % 2 === 0
        ? 'Bzzz... Error!'
        : num1 + num2;
    };
  }

  return getSum;
}

module.exports = makeRobotAccountant;
