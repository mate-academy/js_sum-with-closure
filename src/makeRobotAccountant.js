'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  // write code here
  let calls = 0;

  return function(a) {
    calls++;

    return function(b) {
      if (calls > 3 && calls % 2 === 0) {
        return 'Bzzz... Error!';
      }

      return a + b;
    };
  };
}

module.exports = makeRobotAccountant;
