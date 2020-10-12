'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let counter = 1;

  return (firstNumber) => {
    return (secondNumber) => {
      if (counter <= 3) {
        counter++;

        return firstNumber + secondNumber;
      } else {
        if (counter % 2 === 0) {
          counter++;

          return 'Bzzz... Error!';
        } else {
          counter++;

          return firstNumber + secondNumber;
        }
      }
    };
  };
}

module.exports = makeRobotAccountant;
