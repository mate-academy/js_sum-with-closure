'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let count = 0;
  let amountOftries = 0;

  const getSum = (a) => {
    return (b) => {
      count++;

      if (count <= 3) {
        return a + b;
      } else if (amountOftries === 0) {
        amountOftries++;

        return `Bzzz... Error!`;
      } else if (amountOftries > 0) {
        return a + b;
      }
    };
  };

  return getSum;
}

module.exports = makeRobotAccountant;
