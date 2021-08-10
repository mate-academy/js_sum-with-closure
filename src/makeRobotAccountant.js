'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  // write code here

  let count = 0;
  const getSum = (valueFirst) => {
    const getSumSecond = (valueSecond) => {
      count++;

      return count > 3 && count % 2 === 0
        ? `Bzzz... Error!`
        : valueFirst + valueSecond;
    };

    return getSumSecond;
  };

  return getSum;
};

module.exports = makeRobotAccountant;
