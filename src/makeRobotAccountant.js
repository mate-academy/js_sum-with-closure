'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  // write code here
  let count = 0;

  return (a) => {
    count++;

    return (b) => (!(count % 2) && count > 3) ? 'Bzzz... Error!' : a + b;
  };
}

module.exports = makeRobotAccountant;
