'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let callCount = 0;

  const getSum = (num1) => {
    callCount++;

    return (num2) => {
      const isEvenCall = callCount % 2 === 0;
      const isInvalidCall = isEvenCall && callCount > 3;

      return isInvalidCall ? 'Bzzz... Error!' : num1 + num2;
    };
  };

  return getSum;
}

module.exports = makeRobotAccountant;
