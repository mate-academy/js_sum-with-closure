'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let countOfCalls = 0;

  return (firstNumber) => {
    countOfCalls++;

    return (secondNumber) => (countOfCalls % 2 === 0 && countOfCalls > 3)
      ? 'Bzzz... Error!'
      : firstNumber + secondNumber;
  };
}

module.exports = makeRobotAccountant;
