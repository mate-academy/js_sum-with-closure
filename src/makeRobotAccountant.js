'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let counter = 1;

  return (firstNumber) => {
    return (secondNumber) => {
      if (counter > 3 && counter % 2 === 0) {
        counter++;

        return 'Bzzz... Error!';
      }

      counter++;

      return firstNumber + secondNumber;
    };
  };
}

module.exports = makeRobotAccountant;
