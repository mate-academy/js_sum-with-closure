'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let count = 0;

  function getSum(x) {
    return function(y) {
      count++;

      if (count > 3) {
        if (count % 2 !== 0) {
          return x + y;
        } else {
          return `Bzzz... Error!`;
        }
      } else {
        return x + y;
      }
    };
  };

  return getSum;
}

module.exports = makeRobotAccountant;
