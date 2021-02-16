'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let count = 0;

  function getSum(firstNumber) {
    count++;

    return function(secondNumber) {
      if (count % 2 === 0 && count > 3) {
        return 'Bzzz... Error!';
      } else {
        return firstNumber + secondNumber;
      }
    };
  }

  return getSum;
}

module.exports = makeRobotAccountant;
