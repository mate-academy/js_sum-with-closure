'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let getSumCounter = 0;
  const getSum = (firstNumber) => {
    return (secondNumber) => {
      getSumCounter++;

      if (getSumCounter > 3 && getSumCounter % 2 === 0) {
        return 'Bzzz... Error!';
      }

      return firstNumber + secondNumber;
    };
  };

  return getSum;
}

module.exports = makeRobotAccountant;
