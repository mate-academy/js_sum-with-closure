'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let count = 0;
  const errorMessage = 'Bzzz... Error!';

  const getNumber = (number1) => {
    const getTotalSum = (number2) => {
      count++;

      if (count > 3 && count % 2 === 0) {
        return errorMessage;
      }

      return number1 + number2;
    };

    return getTotalSum;
  };

  return getNumber;
}

module.exports = makeRobotAccountant;
