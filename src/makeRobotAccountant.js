'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let count = 0;

  return function getSum(y) {
    count++;

    let sum = y;

    return function(x) {
      if (count <= 3 || count % 2 !== 0) {
        sum += x;

        return sum;
      }

      if (count > 3) {
        return 'Bzzz... Error!';
      }
    };
  };
}

module.exports = makeRobotAccountant;
