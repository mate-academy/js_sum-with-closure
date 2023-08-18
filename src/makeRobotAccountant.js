'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  const MAX_ATTEMPTS_NUMB = 3;
  const ERROR_MESSAGE = 'Bzzz... Error!';
  let callsCount = 0;

  return (firstNumber) => {
    return (secondNumber) => {
      callsCount++;

      if (callsCount > MAX_ATTEMPTS_NUMB && callsCount % 2 === 0) {
        return ERROR_MESSAGE;
      }

      return secondNumber + firstNumber;
    };
  };
}

module.exports = makeRobotAccountant;
