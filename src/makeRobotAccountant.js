'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let callsCount = 0;

  return (firstNumber) => (secondNumber) => {
    callsCount++;

    return callsCount > 3 && callsCount % 2 === 0
      ? 'Bzzz... Error!'
      : firstNumber + secondNumber;
  };
}

module.exports = makeRobotAccountant;
