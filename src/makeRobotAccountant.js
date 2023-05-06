'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let count = 0;
  let sum = 0;

  const getSum = (a) => {
    const result = (b) => {
      count++;
      sum = a + b;

      if (count < 4) {
        return sum;
      }

      if (count % 2 === 0 && count > 3) {
        return 'Bzzz... Error!';
      } else {
        return sum;
      }
    };

    return result;
  };

  return getSum;
}

module.exports = makeRobotAccountant;
