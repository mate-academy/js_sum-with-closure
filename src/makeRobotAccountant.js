'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  // write code here
  let count = 1;

  return function(x) {
    // const copyX = x;
    return function(y) {
      count++;

      if (count > 3 && count % 2 === 1) {
        return 'Bzzz... Error!';
      }

      return x + y;
    };
  };
}

module.exports = makeRobotAccountant;
