'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccounterant() {
  // write code here
  let currentResult = 0;
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

module.exports = makeRobotAccounterant;
