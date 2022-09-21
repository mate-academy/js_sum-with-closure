'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let calls = 0;

  return (first) => {
    return (second) => {
      calls++;

      return (calls > 3 && calls % 2 === 0)
        ? 'Bzzz... Error!'
        : (first + second);
    };
  };
}

module.exports = makeRobotAccountant;
