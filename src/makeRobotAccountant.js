'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  // write code here
  let i = 1;

  return function(a) {
    return function(b) {
      if (i > 3 && i % 2 === 0) {
        i--;

        return 'Bzzz... Error!';
      }
      i++;

      return a + b;
    };
  };
}

module.exports = makeRobotAccountant;
