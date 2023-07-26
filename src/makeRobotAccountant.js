'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  // write code here
  let count = 0;

  function sum(a) {
    count++;

    return function(b) {
      return count > 3 && count % 2 === 0 ? 'Bzzz... Error!' : a + b;
    };
  };

  return sum;
}

module.exports = makeRobotAccountant;
