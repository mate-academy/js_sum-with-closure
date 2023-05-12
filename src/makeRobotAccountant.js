'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let count = 0;

  return function(x) {
    return function(y) {
      const sum = x + y;

      count++;

      if (count === 4) {
        return 'Bzzz... Error!';
      }

      if (count > 3) {
        if (count % 2 === 0) {
          return 'Bzzz... Error!';
        }

        return sum;
      }

      return sum;
    };
  };
}

module.exports = makeRobotAccountant;
