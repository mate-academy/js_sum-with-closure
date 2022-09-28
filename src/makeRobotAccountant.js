'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let operationCounter = 2;

  const getsum = (firstNumber) => {
    return (secondNumber) => {
      if (operationCounter === -1) {
        operationCounter++;

        return 'Bzzz... Error!';
      }

      operationCounter--;

      return firstNumber + secondNumber;
    };
  };

  return getsum;
}

module.exports = makeRobotAccountant;
