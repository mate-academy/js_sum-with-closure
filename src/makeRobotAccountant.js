'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let countCalls = 0;

  return (firstNumber) => {
    return (secondNumber) => {
      countCalls++;

      if (countCalls <= 3 || countCalls % 2 !== 0) {
        return firstNumber + secondNumber;
      }

      return 'Bzzz... Error!';
    };
  };
}

module.exports = makeRobotAccountant;
