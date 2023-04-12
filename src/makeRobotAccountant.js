'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let count = 0;

  function getSum(arg1) {
    return function(arg2) {
      count++;

      if (count > 3 && count % 2 === 0) {
        return 'Bzzz... Error!';
      }

      return arg1 + arg2;
    };
  }

  return getSum;
}

module.exports = makeRobotAccountant;
