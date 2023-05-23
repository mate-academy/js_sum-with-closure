'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let count = 0;

  const getSum = (x) => {
    count++;

    return (y) => {
      return count >= 4 && count % 2 === 0
        ? 'Bzzz... Error!'
        : x + y;
    };
  };

  return getSum;
}

module.exports = makeRobotAccountant;
