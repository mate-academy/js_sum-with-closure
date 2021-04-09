'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let calls = 0;

  const getSum = (x) => {
    let sum = x;

    const add = (y) => {
      sum += y;
      calls++;

      if (calls >= 4 && calls % 2 === 0) {
        return 'Bzzz... Error!';
      } else {
        return sum;
      }
    };

    return add;
  };

  return getSum;
};

module.exports = makeRobotAccountant;
