'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let count = null;

  return (firstNumber) => {
    return (secondNumber) => {
      count++;

      if (count % 2 !== 0 || count <= 3) {
        return firstNumber + secondNumber;
      }

      return `Bzzz... Error!`;
    };
  };
}

module.exports = makeRobotAccountant;
