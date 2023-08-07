'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let count = 0;

  function getSum(a) {
    return function(b) {
      count++;

      if (count < 4 || count % 2 !== 0) {
        return a + b;
      } else {
        return 'Bzzz... Error!';
      }
    };
  }

  return getSum;
}
module.exports = makeRobotAccountant;
