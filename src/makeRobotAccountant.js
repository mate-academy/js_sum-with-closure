'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let count = 0;

  function getSum(num1) {
    function innerSum(num2) {
      count++;

      if (count > 3 && count % 2 === 0) {
        return 'Bzzz... Error!';
      }

      return num1 + num2;
    }

    return innerSum;
  }

  return getSum;
}

module.exports = makeRobotAccountant;
