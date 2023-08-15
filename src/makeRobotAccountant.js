'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  const MAX_ATTEMPTS_NUMB = 3;
  let callsCount = 0;

  return (firstNumber) => {
    return (secondNumber) => {
      callsCount++;

      if (callsCount > MAX_ATTEMPTS_NUMB && callsCount % 2 === 0) {
        return 'Bzzz... Error!';
      }

      return secondNumber + firstNumber;
    };
  };
}

module.exports = makeRobotAccountant;
