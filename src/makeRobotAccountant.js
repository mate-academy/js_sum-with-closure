'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  // write code here
  let index = 0;

  return function(a) {
    index++;

    return function(b) {
      if (index >= 4 && index % 2 === 0) {
        return 'Bzzz... Error!';
      }

      return a + b;
    };
  };
}

module.exports = makeRobotAccountant;
