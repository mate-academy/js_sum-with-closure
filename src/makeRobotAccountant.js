'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  const NUMBER_OF_ATTEMPTS = 3;
  const ERROR_MESSAGE = 'Bzzz... Error!';
  let counter = 0;

  return (firstNumber) => {
    return (secondNumber) => {
      counter++;

      if (counter > NUMBER_OF_ATTEMPTS && counter % 2 === 0) {
        return ERROR_MESSAGE;
      }

      return firstNumber + secondNumber;
    };
  };
}

module.exports = makeRobotAccountant;
