'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let count = 0;

  const getSum = (firstNumber) => {
    const addNumbers = (secondNumber) => {
      count++;

      if (count > 3 && count % 2 === 0) {
        return `Bzzz... Error!`;
      }

      return firstNumber + secondNumber;
    };

    return addNumbers;
  };

  return getSum;
}

module.exports = makeRobotAccountant;
