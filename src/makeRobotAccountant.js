'use strict';

/**
 *
 * @return {function}
 */
function makeRobotAccountant() {
  // write code here
  let counter = 0;

  function getSum(a) {
    if (counter > 2) {
      counter++;

      return (counter - 1) % 2 !== 0 ? () => 'Bzzz... Error!' : (b) => a + b;
    }

    counter++;

    return (b) => a + b;
  }

  return getSum;
}

module.exports = makeRobotAccountant;
