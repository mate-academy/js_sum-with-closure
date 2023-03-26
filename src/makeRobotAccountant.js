'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let count = 0;

  return function(a) {
    count++;

    if (count % 2 === 0 && count > 3) {
      return function(b) {
        return 'Bzzz... Error!';
      };
    } else {
      return function(b) {
        return a + b;
      };
    }
  };
}

module.exports = makeRobotAccountant;
