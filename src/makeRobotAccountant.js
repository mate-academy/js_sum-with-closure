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

      if (count < 4 || count % 2 !== 0) {
        return x + y;
      }

      return 'Bzzz... Error!';
    };
  }

  return getSum;
}

module.exports = makeRobotAccountant;
