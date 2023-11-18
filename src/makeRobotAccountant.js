'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let count = 0;

  function sum(a) {
    return function(b) {
      count++;

      if (count <= 3) {
        return a + b;
      } else if (count % 2 === 1) {
        return a + b;
      } else {
        return 'Bzzz... Error!';
      }
    };
  }

  return sum;
}

module.exports = makeRobotAccountant;
