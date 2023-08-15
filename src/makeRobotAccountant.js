'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let count = 0;

  function getSum(x) {
    return (y) => {
      count++;

      if (count <= 3) {
        return x + y;
      }

      if (count > 3 && count % 2 === 0) {
        return 'Bzzz... Error!';
      } else {
        return x + y;
      }
    };
  }

  return getSum;
}

module.exports = makeRobotAccountant;
