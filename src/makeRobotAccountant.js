'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  // write code here
  let accum = 0;

  const getSum = (x) => {
    return (y) => {
      accum++;

      return accum % 2 === 0 && accum > 3
        ? 'Bzzz... Error!'
        : x + y;
    };
  };

  return getSum;
}

module.exports = makeRobotAccountant;
