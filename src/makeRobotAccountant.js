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

      if (calls < 4) {
        return x + y;
      }

      if (calls > 4 && calls % 2 !== 0) {
        return x + y;
      } else {
        return 'Bzzz... Error!';
      }
    };
  };

  return getSum;
}

module.exports = makeRobotAccountant;
