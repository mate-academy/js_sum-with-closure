'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  const count = 0;

  return function(a) {
    return function(b) {
      if (count % 2 === 0 && count > 3) {
        return 'Bzzz... Error!';
      }

      return a + b;
    };
  };
}

module.exports = makeRobotAccountant;
