'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let calls = 0;

  return (num1) => {
    return (num2) => {
      calls++;

      return calls > 3 && calls % 2 === 0
        ? 'Bzzz... Error!'
        : num1 + num2;
    };
  };
}

module.exports = makeRobotAccountant;
