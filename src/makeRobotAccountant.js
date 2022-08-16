'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let count = 0;
  const maxCalls = 3;

  const getSum = (x) => {
    return (y) => {
      count++;

      if (count > maxCalls && count % 2 === 0) {
        return `Bzzz... Error!`;
      }

      return x + y;
    };
  };

  return getSum;
}

module.exports = makeRobotAccountant;
