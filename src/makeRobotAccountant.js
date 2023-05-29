'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  // write code here
  let count = 0;

  const getSum = (a) => {
    count++;

    const sum = (b) =>
      (count > 3 && count % 2 === 0) ? 'Bzzz... Error!'
        : (a + b);

    return sum;
  };

  return getSum;
}

module.exports = makeRobotAccountant;
