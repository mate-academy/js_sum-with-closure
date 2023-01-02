'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let counter = 1;

  return (firstNumber) => {
    return (secondNumber) => {
      const isEven = counter % 2 === 0;

      if (counter <= 3 || !isEven) {
        counter++;

        return firstNumber + secondNumber;
      }

      counter++;

      return 'Bzzz... Error!';
    };
  };
}

module.exports = makeRobotAccountant;
