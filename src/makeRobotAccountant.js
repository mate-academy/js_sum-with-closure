'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let count = 0;

  const getSum = (a) => {
    return (b) => {
      count++;

      if (count > 3 && !(count % 2)) {
        return `Bzzz... Error!`;
      };

      return a + b;
    };
  };

  return getSum;
}

module.exports = makeRobotAccountant;
