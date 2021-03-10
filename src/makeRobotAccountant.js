'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let count = 0;

  function sum(x) {
    count++;

    function newSum(y) {
      if (count <= 3) {
        return x + y;
      }

      if ((count > 3) && (count % 2 === 0)) {
        return 'Bzzz... Error!';
      } else {
        return x + y;
      }
    }

    return newSum;
  }

  return sum;
}

module.exports = makeRobotAccountant;
