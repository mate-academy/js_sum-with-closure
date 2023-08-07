'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let count = 0;

  function getSum(a) {
    const errorMessage = 'Bzzz... Error!';

    return function(b) {
      count += 1;

      if (count > 3 && count % 2 === 0) {
        return errorMessage;
      }

      return a + b;
    };
  }

  return getSum;
}

module.exports = makeRobotAccountant;
