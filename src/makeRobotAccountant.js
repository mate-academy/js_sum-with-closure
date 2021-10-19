'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let outerCount = 0;
  let innerCounter = 0;

  return function(firstNumber) {
    return function(secondNumber) {
      if (outerCount >= 3) {
        const isEven = innerCounter % 2 === 0;

        if (isEven) {
          innerCounter++;

          return 'Bzzz... Error!';
        } else {
          innerCounter++;

          return firstNumber + secondNumber;
        }
      } else {
        outerCount++;

        return firstNumber + secondNumber;
      }
    };
  };
}

module.exports = makeRobotAccountant;
