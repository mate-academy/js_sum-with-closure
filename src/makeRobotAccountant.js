'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  const NUMBER_OF_ATTEMPS = 3;
  let counter = 0;

  return (firstNumber) => {
    return (secondNumber) => {
      counter++;

      if (counter > NUMBER_OF_ATTEMPS) {
        counter -= 2;

        return 'Bzzz... Error!';
      }

      return firstNumber + secondNumber;
    };
  };
}

module.exports = makeRobotAccountant;
