'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  // write code here
  let currentResult;
  let counter = 0;

  return (firstNumber) => {
    currentResult = 0;
    currentResult += firstNumber;

    return (secondNumber) => {
      counter++;

      if (counter <= 3 || counter % 2 !== 0) {
        return currentResult + secondNumber;
      }

      return 'Bzzz... Error!';
    };
  };
}

module.exports = makeRobotAccountant;
