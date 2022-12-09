'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let count = 0;

  return function(x) {
    let sum = 0;

    return function(y) {
      sum = x + y;
      count++;

      if (count > 3 && count % 2 === 0) {
        return 'Bzzz... Error!';
      }

      return sum;
    };
  };
}

module.exports = makeRobotAccountant;
