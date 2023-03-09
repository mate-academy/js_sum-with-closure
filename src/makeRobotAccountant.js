'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let count = 0;

  const sum = (a) => {
    const sum1 = (b) => {
      return count > 3 && count % 2 === 0
        ? 'Bzzz... Error!'
        : a + b;
    };

    count++;

    return sum1;
  };

  return sum;
}

module.exports = makeRobotAccountant;
