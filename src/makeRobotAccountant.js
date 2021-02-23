'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let countOfExecution = 0;

  return (firstNumber) => {
    countOfExecution++;

    return (secondNumber) => {
      return countOfExecution > 3 && countOfExecution % 2 === 0
        ? 'Bzzz... Error!'
        : firstNumber + secondNumber;
    };
  };
}

module.exports = makeRobotAccountant;
