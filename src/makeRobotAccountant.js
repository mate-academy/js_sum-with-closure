'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let sum = 0;
  let count = 0;

  const getFirstNumber = (num1) => {
    const getSum = (num2) => {
      count++;

      if (count > 3 && count % 2 === 0) {
        return `Bzzz... Error!`;
      }

      sum = num1 + num2;

      return sum;
    };

    return getSum;
  };

  return getFirstNumber;
}

module.exports = makeRobotAccountant;
