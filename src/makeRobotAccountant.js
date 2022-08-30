'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let counter = 0;

  return function(a) {
    return function(b) {
      counter += 1;

      if (counter <= 3 || counter % 2 > 0) {
        return a + b;
      } else {
        return 'Bzzz... Error!';
      }
    };
  };
}

module.exports = makeRobotAccountant;
