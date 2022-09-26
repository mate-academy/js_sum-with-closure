'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let counter = 0;

  return (firstNumber) => {
    counter++;

    const isBroken = counter >= 4 && counter % 2 === 0;

    return (secondNumber) => isBroken
      ? 'Bzzz... Error!'
      : firstNumber + secondNumber;
  };
}

module.exports = makeRobotAccountant;
