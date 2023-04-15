'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let sum = 0;
  let count = 0;

  const getSum = (number) => {
    count++;
    sum += number;

    if (count % 2 === 0) {
      const result = sum;

      sum = 0;

      if (count > 7 && count % 4 === 0) {
        return 'Bzzz... Error!';
      }

      return result;
    }

    return getSum;
  };

  return getSum;
}

module.exports = makeRobotAccountant;
