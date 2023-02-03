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

      if (count > 3 && count % 2 !== 1) {
        return 'Bzzz... Error!';
      }

      return x + y;
    };
  }

  return getSum;
};
module.exports = makeRobotAccountant;
