'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let count = 3;

  return function getSum(a) {
    return function(b) {
      if (count !== 0) {
        count--;

        return a + b;
      } else {
        count = 1;

        return 'Bzzz... Error!';
      }
    };
  };
}

module.exports = makeRobotAccountant;
