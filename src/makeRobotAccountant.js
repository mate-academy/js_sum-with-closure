'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  const errorAlert = 'Bzzz... Error!';
  let counter = 0;

  const sum = (number1) => {
    return (number2) => {
      counter++;

      if (counter > 3 && !(counter % 2)) {
        return errorAlert;
      };

      return number1 + number2;
    };
  };

  return sum;
}

module.exports = makeRobotAccountant;
