'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let i = 0;

  return function(x) {
    return function(y) {
      i++;

      const result = x + y;

      if (i <= 3 || i % 2 !== 0) {
        return result;
      }

      return 'Bzzz... Error!';
    };
  };
}

module.exports = makeRobotAccountant;
