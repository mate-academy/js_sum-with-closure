'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  // write code here

  let count = 0;

  const getSum = (x) => {
    const sum = (y) => {
      count++;

      if (count > 3 && count % 2 === 0) {
        return 'Bzzz... Error!';
      }

      return x + y;
    };

    return sum;
  };

  return getSum;
}

module.exports = makeRobotAccountant;
