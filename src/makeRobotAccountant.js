'use strict';

/**
 * @return {function}
 */

function makeRobotAccountant() {
  const FINE_CALLS = 3;
  const ERROR_MSG = 'Bzzz... Error!';

  let callCount = 0;

  return (firstNumber) => {
    return (secondNumber) => {
      callCount += 1;

      const isEvenCall = callCount % 2 === 0;
      const isError = callCount > FINE_CALLS && isEvenCall;

      if (isError) {
        return ERROR_MSG;
      }

      return firstNumber + secondNumber;
    };
  };
}

module.exports = makeRobotAccountant;
