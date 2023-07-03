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
      if (count <= 3 || count % 2 !== 0) {
        return firstNumber + secondNumber;
      } else {
        return 'Bzzz... Error!';
      }
    };
  }

  return getSum;
}

module.exports = makeRobotAccountant;
