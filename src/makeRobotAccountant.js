'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  // write code here

  let count = 0;

  return (firstNumber) => {
    return (secondNumber) => {
      count++;

      const sum = firstNumber + secondNumber;

      if (count < 4 || count % 2 !== 0) {
        return sum;
      }

      return 'Bzzz... Error!';
    };
  };
}

module.exports = makeRobotAccountant;
