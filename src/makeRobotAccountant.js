'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let count = 0;
  let times = 3;

  return function getSum(a) {
    return function(b) {
      count++;

      if (times > 0) {
        times--;

        return a + b;
      }

      if (count % 2 === 0) {
        return 'Bzzz... Error!';
      } else {
        return a + b;
      }
    };
  };
}

module.exports = makeRobotAccountant;
