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

      count = 1;

      return 'Bzzz... Error!';
    };
  };
}

module.exports = makeRobotAccountant;
