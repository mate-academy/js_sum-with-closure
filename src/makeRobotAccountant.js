'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let operationsCounter = 0;
  const START_VALUE = 3;

  const ERROR_MESSAGE = 'Bzzz... Error!';

  return (num1) => {
    operationsCounter++;

    const isBigger = operationsCounter > START_VALUE;
    const isOdd = operationsCounter % 2 === 0;

    return isBigger && isOdd
      ? () => ERROR_MESSAGE
      : num2 => num1 + num2;
  };
}

module.exports = makeRobotAccountant;
