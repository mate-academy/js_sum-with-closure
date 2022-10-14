'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  // write code here
  let count = 0;

  function add(a) {
    return function(b) {
      count++;

      if (count < 4) {
        return a + b;
      }

      if (count % 2 === 0) {
        return 'Bzzz... Error!';
      }

      return a + b;
    };
  }

  return add;
}

module.exports = makeRobotAccountant;
