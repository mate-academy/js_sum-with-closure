'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  // write code here
  let count = 0;

  function getSum(a) {
    return function(b) {
      count++;

      if (count > 2 && count % 2 === 0) {
        return 'Bzzz... Error!';
      } else {
        return a + b;
      }
    };
  }

  return getSum;
}

module.exports = makeRobotAccountant;

// if (count > 3 && count % 2 === 0) {
//   return 'Bzzz... Error!';
// }
