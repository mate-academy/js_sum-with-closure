'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let i = 0;

  function getSum(a) {
    i++;

    return function(b) {
      if ((i >= 4) && (((a + b) % 2)) === 0) {
        i = 0;

        return 'Bzzz... Error!';
      }

      return a + b;
    };
  }

  return getSum;
}

module.exports = makeRobotAccountant;
