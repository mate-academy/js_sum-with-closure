'use strict';

/**
 *
 * 
 * @return {function}
 */

function makeRobotAccountant() {
  let count = 0;

  function getSum(a) {
    return function(b) {
      count++;

      return count < 4 || count % 2 !== 0 ? a + b : 'Bzzz... Error!';
    };
  }

  return getSum;
}
module.exports = makeRobotAccountant;
