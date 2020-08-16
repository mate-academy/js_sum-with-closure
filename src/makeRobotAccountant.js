'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  // write code here
  let count = 0;

  return (a) => (b) => {
    count++;

    if (count < 4) {
      return a + b;
    }

    return count % 2 === 0 ? 'Bzzz... Error!' : a + b;
  };
}

module.exports = makeRobotAccountant;
