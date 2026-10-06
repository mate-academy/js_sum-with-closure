'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let count = 0;

  return (firstNumber) => {
    count++;

    return (secondNumber) => {
      if (count % 2 === 0 && count >= 4) {
        return `Bzzz... Error!`;
      }

      return firstNumber + secondNumber;
    };
  };
}
// comment
module.exports = makeRobotAccountant;
