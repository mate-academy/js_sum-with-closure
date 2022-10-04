'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let count = 0;

  const getSum = (a) => {
    count++;

    let sum = a;

    const getAugment = (b) => {
      sum += b;

      if (count >= 4 && count % 2 === 0) {
        return 'Bzzz... Error!';
      }

      return sum;
    };

    return getAugment;
  };

  return getSum;
}

module.exports = makeRobotAccountant;
