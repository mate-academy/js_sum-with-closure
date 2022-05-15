'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let count = 0;

  function getSum(firstNum) {
    count++;

    function add(secondNum) {
      return count > 3 && count % 2 === 0
        ? 'Bzzz... Error!'
        : firstNum + secondNum;
    }

    return add;
  }

  return getSum;
}

module.exports = makeRobotAccountant;
