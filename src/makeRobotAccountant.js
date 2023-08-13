'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let CALLS_COUNT = 0;
  const MAX_CALLS_COUNT = 3;
  const ERROR_MESSAGE = 'Bzzz... Error!';

  function getSum(num1) {
    CALLS_COUNT++;

    return function(num2) {
      if ((CALLS_COUNT > MAX_CALLS_COUNT) && (CALLS_COUNT % 2 === 0)) {
        return ERROR_MESSAGE;
      }

      return num1 + num2;
    };
  }

  return getSum;
}

module.exports = makeRobotAccountant;
