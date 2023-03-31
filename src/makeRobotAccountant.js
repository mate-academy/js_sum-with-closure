'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let count = 0;

  function add(a) {
    return function(b) {
      count++;

      if (count >= 4 && count % 2 === 0) {
        return 'Bzzz... Error!';
      }

      return a + b;
    };
  }

  return add;
}

module.exports = makeRobotAccountant;
