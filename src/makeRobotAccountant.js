'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let calls = 0;

  return (x) => {
    calls++;

    return (y) => {
      const sum = x + y;

      return calls > 3 && calls % 2 === 0
        ? 'Bzzz... Error!'
        : sum;
    };
  };
}

module.exports = makeRobotAccountant;
