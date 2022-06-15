'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let countCall = 0;
  const errorMessage = 'Bzzz... Error!';
  let sum;

  return (firstNumber) => {
    return (secondNumber) => {
      sum = firstNumber + secondNumber;
      countCall++;

      if (countCall % 2 === 0 && countCall > 3) {
        return errorMessage;
      }

      return sum;
    };
  };
}

module.exports = makeRobotAccountant;
