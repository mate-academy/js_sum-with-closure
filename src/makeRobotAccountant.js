'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let counter = 0;

  const getSum = (firstNumber) => {
    const getSecondNumber = (secondNumber) => {
      counter++;

      if (counter > 3 && counter % 2 === 0) {
        return `Bzzz... Error!`;
      }

      return firstNumber + secondNumber;
    };

    return getSecondNumber;
  };

  return getSum;
}

module.exports = makeRobotAccountant;
