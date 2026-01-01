'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let count = 0;

  function getSum(a) {
    return function(b) {
      count += 1;

      if (count <= 3) {
        return a + b;
      }

      if (count % 2 === 0) {
        return `Bzzz... Error!`;
      }

      return a + b;
    };
  };

  return getSum;
}

module.exports = makeRobotAccountant;
