'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  const CORRECT_COUNT_WORKINGS = 3;
  const ERROR_MESSAGE = 'Bzzz... Error!';
  let callCount = 0;

  return (firstNum) => (secondNum) => {
    callCount++;

    const isEven = callCount % 2 === 0;
    const isBroken = callCount > CORRECT_COUNT_WORKINGS && isEven;

    if (isBroken) {
      return ERROR_MESSAGE;
    }

    return firstNum + secondNum;
  };
}

module.exports = makeRobotAccountant;
