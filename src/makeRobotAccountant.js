'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let count = 0;

  return (firstNumber) => {
    return (secondNumber) => {
      count++;

      if (count <= 3 || count % 2 === 1) {
        return firstNumber + secondNumber;
      }

      return 'Bzzz... Error!';
    };
  };
}

module.exports = makeRobotAccountant;
