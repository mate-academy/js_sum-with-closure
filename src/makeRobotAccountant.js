'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let count = 0;

  function getSum(firstNumber) {
    count++;

    function secondSum(secondNumber) {
      if (count > 3 && count % 2 === 0) {
        return 'Bzzz... Error!';
      }

      return firstNumber + secondNumber;
    }

    return secondSum;
  }

  return getSum;
}

module.exports = makeRobotAccountant;
