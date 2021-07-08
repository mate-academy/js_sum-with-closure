'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let count = 1;

  return (firstNumber) => {
    return (secondNumber) => {
      if (count % 2 === 0 && count > 3) {
        count++;

        return 'Bzzz... Error!';
      }
      count++;

      return firstNumber + secondNumber;
    };
  };
}

module.exports = makeRobotAccountant;
