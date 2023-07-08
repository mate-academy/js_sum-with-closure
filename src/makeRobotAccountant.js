'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let count = 0;

  return function getSum(a) {
    count++;

    if (count <= 3 || count % 2 !== 0) {
      let sum = a;
      const inner = function(b) {
        sum += b;

        return sum;
      };

      return inner;
    } else {
      return function() {
        return 'Bzzz... Error!';
      };
    }
  };
}

module.exports = makeRobotAccountant;
