'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let count = 0;

  const getSum = (value) => {
    return (value1) => {
      count++;

      const breakCondition = count > 3 && count % 2 === 0;

      const result = value + value1;

      return breakCondition
        ? 'Bzzz... Error!'
        : result;
    };
  };

  return getSum;
}

module.exports = makeRobotAccountant;
