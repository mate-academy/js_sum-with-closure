'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let counter = 0;

  return (firstNumber) => {
    return (secondNumber) => {
      counter += 1;

      return counter < 3 || counter % 2 !== 0
        ? firstNumber + secondNumber
        : 'Bzzz... Error!';
    };
  };
}

module.exports = makeRobotAccountant;
