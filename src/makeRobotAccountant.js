'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let calls = 0;

  return (number1) => {
    calls++;

    return (number2) => calls > 3 && calls % 2 === 0
      ? 'Bzzz... Error!'
      : number1 + number2;
  };
}

module.exports = makeRobotAccountant;
