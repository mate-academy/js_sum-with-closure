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
      return attempts > 3 && attempts % 2 === 0 ? 'Bzzz... Error!'
        : a + b;
    };
  };
}

module.exports = makeRobotAccountant;
