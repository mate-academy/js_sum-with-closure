'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  const ERROR_MESSAGE = 'Bzzz... Error!';
  const FINE_CALLS = 3;
  let numberOfOperations = 0;

  return function(x) {
    numberOfOperations++;

    return function(y) {
      const isEvenCall = numberOfOperations % 2 === 0;
      const isError = numberOfOperations > FINE_CALLS && isEvenCall;

      if (isError) {
        return ERROR_MESSAGE;
      }

      return x + y;
    };
  };
}

module.exports = makeRobotAccountant;
