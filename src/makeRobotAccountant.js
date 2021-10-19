'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let counter = 1;

  return function(firstNumber) {
    return function(secondNumber) {
      if (counter >= 3) {
        const isOdd = counter % 2 !== 0;

        if (isOdd) {
          counter++;

          return firstNumber + secondNumber;
        } else {
          counter++;

          return 'Bzzz... Error!';
        }
      } else {
        counter++;

        return firstNumber + secondNumber;
      }
    };
  };
}

module.exports = makeRobotAccountant;
