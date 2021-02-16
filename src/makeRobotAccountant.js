'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let count = 0;

  function getSum(x) {
    count++;

    return function(y) {
      if (count % 2 === 0 && count > 3) {
        return 'Bzzz... Error!';
      } else {
        return x + y;
      }
    };
  }

  return getSum;
}

module.exports = makeRobotAccountant;
