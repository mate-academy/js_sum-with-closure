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
      const sum = firstNumber + secondNumber;

      count++;

      if (count > 3 && count % 2 === 0) {
        return 'Bzzz... Error!';
      }

      return sum;
    };
  };
}

module.exports = makeRobotAccountant;
