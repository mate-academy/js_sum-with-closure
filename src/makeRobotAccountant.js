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

    return function(b) {
      return ((count > 3) && (count % 2 === 0)) ? 'Bzzz... Error!' : a + b;
    };
  };

  return callSum;
}

module.exports = makeRobotAccountant;
