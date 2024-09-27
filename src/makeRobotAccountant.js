'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let count = 0;

  function getSum(x) {
    count++;

    return function(y) {
      if (count <= 3) {
        return x + y;
      } else {
        if (count % 2 !== 0) {
          return x + y;
        }

        return 'Bzzz... Error!';
      };
    };
  }

  return getSum;
}

module.exports = makeRobotAccountant;
