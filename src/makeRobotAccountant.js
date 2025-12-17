'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let callNumber = 0;

  return function getSum(firstNumber) {
    callNumber += 1;
    const currentCall = callNumber;

    return function add(secondNumber) {
      const sum = firstNumber + secondNumber;

      if (currentCall <= 3) {
        return sum;
      }

      return currentCall % 2 === 0 ? 'Bzzz... Error!' : sum;
    };
  };
}

module.exports = makeRobotAccountant;
