'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let sum = 0;

  const getSum = (firstNumber) => {
    const addNumbers = (secondNumber) => {
      sum++;

      if (sum > 3 && sum % 2 === 0) {
        return `Bzzz... Error!`;
      }

      return firstNumber + secondNumber;
    };

    return addNumbers;
  };

  return getSum;
}

module.exports = makeRobotAccountant;
