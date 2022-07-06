'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let calls = 0;

  return (firstDigit) => {
    calls++;

    return calls > 3 && calls % 2 === 0
      ? () => 'Bzzz... Error!'
      : (secondDigit) => firstDigit + secondDigit;
  };
}

module.exports = makeRobotAccountant;
