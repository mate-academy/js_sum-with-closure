'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let counter = 0;
  const errorMessage = 'Bzzz... Error!';

  const getSum = (firstNumber) => {
    return (secondNumber) => {
      counter++;

      return (counter < 4 || counter % 2)
        ? secondNumber + firstNumber
        : errorMessage;
    };
  };

  return getSum;
}

module.exports = makeRobotAccountant;
