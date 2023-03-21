'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let count = 1;

  return function(x) {
    return function(y) {
      if (count < 3 || count % 2 > 0) {
        count++;

        return x + y;
      } else {
        count++;

        return 'Bzzz... Error!';
      }
    };
  };
}

module.exports = makeRobotAccountant;
