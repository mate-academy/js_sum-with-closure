'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let count = 0;

  const getSum = (a) => {
    count++;

    const shouldBreak = count > 3 && count % 2 === 0;

    return (b) => {
      return shouldBreak
        ? 'Bzzz... Error!'
        : a + b;
    };
  };

  return getSum;
}
module.exports = makeRobotAccountant;
