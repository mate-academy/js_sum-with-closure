'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let count = 0;

  return function(a) {
    count++;

    return function(b) {
      if (count > 3 && ((a + b) % 2) === 0) {
        count = 0;

        return 'Bzzz... Error!';
      }

      return a + b;
    };
  };
}

module.exports = makeRobotAccountant;
