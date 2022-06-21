'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let sum = 0;
  let counter = 0;

  const getSum = (firstNumber) => {
    const getSecondNumber = (secondNumber) => {
      counter++;

      if (counter > 3 && counter % 2 === 0) {
        return `Bzzz... Error!`;
      }

      sum = firstNumber + secondNumber;

      return sum;
    };

    return getSecondNumber;
  };

  return getSum;
}

module.exports = makeRobotAccountant;
