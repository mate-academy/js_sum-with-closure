'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let attempts = 0;

  return function(a) {
    attempts++;

    return function(b) {
      if (attempts > 3 && attempts % 2 === 0) {
        return 'Bzzz... Error!';
      }

      return a + b;
    };
  };
}

module.exports = makeRobotAccountant;
