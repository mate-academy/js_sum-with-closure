'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let count = 0;

  return function(a) {
    return function(b) {
      count++;

      if (count % 2 === 0 && count > 3) {
        return 'Bzzz... Error!';
      };

      return a + b;
    };
  };
}

module.exports = makeRobotAccountant;
