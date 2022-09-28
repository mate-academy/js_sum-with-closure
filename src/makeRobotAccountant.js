'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let count = 0;

  return function(x) {
    return function(y) {
      if (count < 3) {
        count++;

        return x + y;
      }

      if (count > 3 && (x + y) % 2 === 0) {
        count++;

        return x + y;
      }
      count++;

      return 'Bzzz... Error!';
    };
  };
}

module.exports = makeRobotAccountant;
