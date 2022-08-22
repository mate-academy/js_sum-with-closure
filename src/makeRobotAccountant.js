'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let counter = 0;
  const count = 3;

  const getSum = (x, y) => {
    return x + y;
  };

  return function(firstNumber) {
    return function(secondNumber) {
      counter++;

      if (counter > count && counter % 2 === 0) {
        return `Bzzz... Error!`;
      }

      return getSum(firstNumber, secondNumber);
    };
  };
}

module.exports = makeRobotAccountant;
