'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let count = 4;
  const getSum = (a) => {
    const getSumWithRestriction = (b) => {
      count--;

      return (count === 0 && count % 2 === 0) ? (`Bzzz... Error!`) : (a + b);
    };

    return getSumWithRestriction;
  };

  return getSum;
};

module.exports = makeRobotAccountant;
