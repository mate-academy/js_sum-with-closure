'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let counter = 0;
  let isOdd = true;

  return function(a) {
    if (++counter <= 3) {
      return function(b) {
        return a + b;
      };
    } else {
      isOdd = !isOdd;
      counter++;

      if (isOdd) {
        return function(b) {
          return a + b;
        };
      } else {
        return function(b) {
          return 'Bzzz... Error!';
        };
      }
    }
  };
}

module.exports = makeRobotAccountant;
