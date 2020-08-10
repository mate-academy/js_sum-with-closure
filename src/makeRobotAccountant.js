'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  // write code here
  let count = 0;

  return function(x) {
    count++;

    return function(y) {
      if (count % 2 === 0 && count >= 4) {
        return 'Bzzz... Error!';
      } else {
        return x + y;
      };
    };
  };
}

module.exports = makeRobotAccountant;
