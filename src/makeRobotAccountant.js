'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let count = 0;

  const getSum = (x) => {
    return (y) => {
      count++;

      return count >= 4 && !(count % 2)
        ? 'Bzzz... Error!'
        : x + y;
    };
  };

  return getSum;
}

module.exports = makeRobotAccountant;
