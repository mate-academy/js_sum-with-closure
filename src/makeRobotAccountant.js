'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let count = 0;

  const getSum = (value) => {
    return (nextValue) => {
      count++;

      const shouldBreak = count > 3 && count % 2 === 0;

      const result = value + nextValue;

      return shouldBreak
        ? 'Bzzz... Error!'
        : result;
    };
  };

  return getSum;
}

module.exports = makeRobotAccountant;
