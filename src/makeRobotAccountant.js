'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let callCount = 0;

  function getSum(x) {
    callCount++;

    return (y) => {
      if (callCount % 2 === 0 && callCount >= 3) {
        return `Bzzz... Error!`;
      }

      return x + y;
    };
  }

  return getSum;
}

module.exports = makeRobotAccountant;
