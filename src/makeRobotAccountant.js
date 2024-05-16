'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  // write code here

  let count = 0;

  function getSum(x) {
    count++;

    return (y) => {
      return count <= 3 ? x + y : count % 2 === 0 ? 'Bzzz... Error!' : x + y;
    };
  };

  return getSum;
}

module.exports = makeRobotAccountant;
