'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let sum = 0;
  let count = 0;

  const getFirstNumber = (first) => {
    const getSum = (second) => {
      count++;

      if (count % 2 === 0 && count > 3) {
        return `Bzzz... Error!`;
      }

      sum = first + second;

      return sum;
    };

    return getSum;
  };

  return getFirstNumber;
}

module.exports = makeRobotAccountant;
