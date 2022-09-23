'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let count = 0;

  return (firstNumber) => {
    count++;

    return (secondNumber) => (count % 2 === 0 && count > 3)
      ? 'Bzzz... Error!'
      : firstNumber + secondNumber;
  };
}

module.exports = makeRobotAccountant;
