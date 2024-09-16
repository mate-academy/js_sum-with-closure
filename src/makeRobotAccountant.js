'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let iterator = 0;

  return function(firstNumber) {
    return function(secondNumber) {
      iterator++;

      return (iterator > 3 && iterator % 2 === 0)
        ? 'Bzzz... Error!' : firstNumber + secondNumber;
    };
  };
}

module.exports = makeRobotAccountant;
