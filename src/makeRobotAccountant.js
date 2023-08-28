'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let countCall = 0;

  return (firstNumber) => {
    countCall++;

    return (secondNumber) => {
      if (countCall > 3 && countCall % 2 === 0) {
        return `Bzzz... Error!`;
      }

      return secondNumber + firstNumber;
    };
  };
}

module.exports = makeRobotAccountant;
