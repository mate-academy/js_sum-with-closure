'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let counter = 0;

  return (a = 0) => {
    return (b = 0) => {
      counter += 1;

      return counter > 3 && (counter % 2) === 0
        ? 'Bzzz... Error!'
        : a + b;
    };
  };
}

module.exports = makeRobotAccountant;
