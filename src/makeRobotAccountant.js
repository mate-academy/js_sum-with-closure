'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let counter = 0;

  const summing = (number1) =>
    (number2) => {
      counter++;

      return counter > 3 && counter % 2 === 0
        ? 'Bzzz... Error!'
        : number1 + number2;
    };

  return summing;
}

module.exports = makeRobotAccountant;
