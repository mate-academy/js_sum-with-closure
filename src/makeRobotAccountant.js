'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let counter = 0;

  return function(firstNumber) {
    return function(secondNumber) {
      counter++;

      if (counter >= 3 && counter % 2 === 0) {
        return 'Bzzz... Error!';
      } else {
        return firstNumber + secondNumber;
      }
    };
  };
}

module.exports = makeRobotAccountant;
