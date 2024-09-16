'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let callsCount = 0;

  function getSum(firstNumber) {
    return function(secondNumber) {
      callsCount++;

      if (callsCount <= 3 || callsCount % 2 !== 0) {
        return firstNumber + secondNumber;
      } else {
        return 'Bzzz... Error!';
      }
    };
  }

  return getSum;
}

module.exports = makeRobotAccountant;
