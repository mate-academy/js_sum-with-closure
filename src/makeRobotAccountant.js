'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let limit = 0;

  return function(a) {
    return function(b) {
      limit++;

      if (limit > 3 && limit % 2 === 0) {
        return 'Bzzz... Error!';
      }

      return a + b;
    };
  };
}

module.exports = makeRobotAccountant;
