'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let counter = 0;

  return function(firstNumber) {
    counter++;

    return function(secondNumber) {
      if (counter > 3 && counter % 2 === 0) {
        return 'Bzzz... Error!';
      }

      return firstNumber + secondNumber;
    };
  };
}

module.exports = makeRobotAccountant;
