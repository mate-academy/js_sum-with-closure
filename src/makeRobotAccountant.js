'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let callCount = 0;

  const addNumbers = (num1) => (num2) => {
    callCount++;

    const isEvenCall = callCount % 2 === 0;
    const isInvalidCall = isEvenCall && callCount > 3;

    return isInvalidCall ? 'Bzzz... Error!' : num1 + num2;
  };

  return addNumbers;
}

module.exports = makeRobotAccountant;
