'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  // write code here
  let callsCount = 0;

  function getSum(firstNumber) {
    return (secondNumber) => {
      const sum = firstNumber + secondNumber;

      callsCount++;

      if (callsCount <= 3 || callsCount % 2) {
        return sum;
      }

      return 'Bzzz... Error!';
    };
  }

  return getSum;
}

module.exports = makeRobotAccountant;
