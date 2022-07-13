'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let counter = 0;

  return function(firstNumber) {
    counter++;

    return counter > 2 && counter % 2 === 0
      ? () => 'Bzzz... Error!'
      : (secondNumber) => firstNumber + secondNumber;
  };
}

module.exports = makeRobotAccountant;
