'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant(x) {
  let count = 0;

  return function(y) {
    return function(z) {
      count++;

      if (count > 3 && count % 2 === 0) {
        return 'Bzzz... Error!';
      }

      return z + y;
    };
  };
}

module.exports = makeRobotAccountant;
