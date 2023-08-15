'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let callsAmount = 0;

  return number1 =>
    number2 => {
      callsAmount++;

      const isError = callsAmount > 3
        && callsAmount % 2 === 0;

      return isError
        ? 'Bzzz... Error!'
        : number1 + number2;
    };
}

module.exports = makeRobotAccountant;
