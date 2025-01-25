'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let count = 0;

  function getSum(a) {
    count++;

    return function(b) {
      if (count > 3) {
        if (count % 2 === 0) {
          return 'Bzzz... Error!';
        }
        count = 0;
      }

      return a + b;
    };
  }

  return getSum;
}

module.exports = makeRobotAccountant;
