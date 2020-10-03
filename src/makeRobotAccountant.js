'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let count = 0;

  function getSum1(number1) {
    let sum = number1;

    function getSum2(number2) {
      sum += number2;
      count++;

      if (count > 3 && count % 2 === 0) {
        return `Bzzz... Error!`;
      } else {
        return sum;
      }
    }

    return getSum2;
  }

  return getSum1;
}

module.exports = makeRobotAccountant;
