'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let count = 0;

  const getSum = (number1) => {
    const addNumber = (number2) => {
      count++;

      if (count > 3 && count % 2 === 0) {
        return 'Bzzz... Error!';
      }

      return number1 + number2;
    };

    return addNumber;
  };

  return getSum;
}

module.exports = makeRobotAccountant;
