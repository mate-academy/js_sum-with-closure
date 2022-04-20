'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let calls = 0;

  function getSum(x) {
    return function(y) {
      calls++;

      if (calls > 3 && calls % 2 === 0) {
        return 'Bzzz... Error!';
      } else {
        return x + y;
      }
    };
  };

  return getSum;
}

module.exports = makeRobotAccountant;
