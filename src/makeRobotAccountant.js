'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let counter = 0;

  const getSum = (firstNumber) => {
    counter++;

    return (secondNumber) => {
      if (counter < 3 || counter % 2 === 1) {
        return firstNumber + secondNumber;
      }

      return 'Bzzz... Error!';
    };
  };

  return getSum;
}

module.exports = makeRobotAccountant;
