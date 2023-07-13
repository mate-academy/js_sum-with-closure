'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let count = 0;

  return function getSum(a) {
    return b => {
      count++;

      return count < 3 || count % 2 === 1 ? a + b : 'Bzzz... Error!';
    };
  };
}

module.exports = makeRobotAccountant;
