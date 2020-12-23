'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let count = 3;

  return (firstNumber) => {
    return (secondNumber) => {
      if (count > 0) {
        count--;

        return firstNumber + secondNumber;
      }

      count = 2;

      return 'Bzzz... Error!';
    };
  };
}

module.exports = makeRobotAccountant;
