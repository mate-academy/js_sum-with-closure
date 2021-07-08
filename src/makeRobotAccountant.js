'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let count = 0;
  const errorMessage = 'Bzzz... Error!';

  const sum = (number1) => {
    return (number2) => {
      count++;

      if (count > 3 && count % 2 === 0) {
        return errorMessage;
      }

      return number1 + number2;
    };
  };

  return sum;
}

module.exports = makeRobotAccountant;
