'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  // write code here
  let firstNumber = 1;

  return (a) => {
    const currentNumber = firstNumber;

    return (b) => {
      firstNumber++;

      if (currentNumber <= 3 || currentNumber % 2 === 1) {
        return a + b;
      }

      return 'Bzzz... Error!';
    };
  };
}

module.exports = makeRobotAccountant;
