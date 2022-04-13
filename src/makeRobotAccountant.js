'use strict';

/**
 *
 * @return {function}
 */
function makeRobotAccountant() {
  let count = 0;

  const getFirstCall = (x) => {
    const getSumWithX = (y) => {
      count++;

      if (count % 2 === 0 && count > 3) {
        return `Bzzz... Error!`;
      }

      return x + y;
    };

    return getSumWithX;
  };

  return getFirstCall;
}

module.exports = makeRobotAccountant;
