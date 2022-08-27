'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let counter = 0;
  let sum = 0;

  return function(a) {
    return function(b) {
      counter += 1;

      if (counter <= 3 || counter % 2 > 0) {
        sum = sum + a + b;

        return sum;
      } else {
        sum = 0;

        return 'Bzzz... Error!';
      }
    };
  };
}

module.exports = makeRobotAccountant;
