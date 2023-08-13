'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  const CORRECT_COUNT_WORKINGS = 3;
  let callCount = 1;

  return (firstNum) => (secondNum) => {
    const isEven = callCount % 2 === 0;
    const isBroken = callCount > CORRECT_COUNT_WORKINGS && isEven;

    if (isBroken) {
      callCount++;

      return 'Bzzz... Error!';
    }
    callCount++;

    return firstNum + secondNum;
  };
}

module.exports = makeRobotAccountant;
