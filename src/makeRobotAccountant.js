'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let count = 1;

  return function getSum(x) {
    return (y) => {
      count++;

      if (count > 3 && count % 2) {
        return `Bzzz... Error!`;
      }

      return y + x;
    };
  };
}

module.exports = makeRobotAccountant;
