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

      if (count < 3) {
        return firstNumber + secondNumber;
      } else {
        const result = count % 2 === 0
          ? 'Bzzz... Error!'
          : firstNumber + secondNumber;

        return result;
      }
    };
  };
}

module.exports = makeRobotAccountant;
