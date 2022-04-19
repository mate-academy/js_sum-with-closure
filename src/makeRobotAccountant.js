'use strict';

/**
 *
 * @return {function}
 */
function makeRobotAccountant() {
  // write code here
  let counter = 0;

  function getSum(a) {
    counter++;

    return counter < 3
      ? (b) => a + b : (counter - 1) % 2 !== 0
        ? () => 'Bzzz... Error!' : (b) => a + b;
  }

  return getSum;
}

module.exports = makeRobotAccountant;
