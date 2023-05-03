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

      return count > 3 && count % 2 === 0
        ? 'Bzzz... Error!'
        : a + b;
    };
  };

  return getSum;
}

module.exports = makeRobotAccountant;
