'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let count = 0;

  const getSum = (firstNumber) => {
    const sum = (secondNumber) => {
      count++;

      if (count > 3 && !(count % 2)) {
        return `Bzzz... Error!`;
      }

      return firstNumber + secondNumber;
    };

    return sum;
  };

  return getSum;
}

module.exports = makeRobotAccountant;
