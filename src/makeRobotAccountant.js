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

      return count <= 3 || count % 2 !== 0
        ? x + y
        : 'Bzzz... Error!';
    };
  };

  return getSum;
}

module.exports = makeRobotAccountant;
