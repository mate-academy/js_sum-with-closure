'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let counter = 0;

  return (firstNumber) => {
    counter++;

    return (secondNumber) => {
      if (counter < 4 || counter % 2 !== 0) {
        return firstNumber + secondNumber;
      }

      return 'Bzzz... Error!';
    };
  };
}

module.exports = makeRobotAccountant;
