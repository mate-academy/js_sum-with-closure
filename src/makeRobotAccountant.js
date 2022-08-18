'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let count = 0;

  function getSum(x) {
    return (y) => {
      if (count < 3) {
        count++;

        return x + y;
      } else if (count % 2 === 0) {
        count++;

        return x + y;
      } else {
        count++;

        return `Bzzz... Error!`;
      }
    };
  }

  return getSum;
}

module.exports = makeRobotAccountant;
