'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  // write code here
  let count = 0;

  const callSum = function getSum(a) {
    count++;

    if ((count > 3) && (count % 2 === 0)) {
      return () => 'Bzzz... Error!';
    } else {
      return function(b) {
        return a + b;
      };
    }
  };

  return callSum;
}

module.exports = makeRobotAccountant;
