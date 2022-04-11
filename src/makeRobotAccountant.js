'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let count = 0;

  function getSum(a) {
    count++;

    function add(b) {
      if (count > 3 && count % 2 === 0) {
        return `Bzzz... Error!`;
      }

      return a + b;
    }

    return add;
  }

  return getSum;
}

module.exports = makeRobotAccountant;
