'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let count = 0;

  function getSum(x) {
    count++;

    const shouldError = count >= 4 && count % 2 === 0;

    return function(y) {
      if (shouldError) {
        return 'Bzzz... Error!';
      } else {
        return x + y;
      }
    };
  }

  return getSum;
}

module.exports = makeRobotAccountant;
