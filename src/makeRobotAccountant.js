'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let callCount = 0;

  const getSum = (firstNumber) => {
    return (secondNumber) => {
      callCount++;

      const isEvenCall = callCount % 2 === 0;
      const isInvalidCall = isEvenCall && callCount > 3;

      return isInvalidCall ? 'Bzzz... Error!' : firstNumber + secondNumber;
    };
  };

  return getSum;
}

module.exports = makeRobotAccountant;
