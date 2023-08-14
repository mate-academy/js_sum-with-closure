'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let callsCount = 0;
  const MAX_CALLS_COUNT = 3;
  const ERROR_MESSAGE = 'Bzzz... Error!';

  function getSum(x) {
    callsCount++;

    return function(y) {
      const isExcessCalls = (callsCount > MAX_CALLS_COUNT)
        && (callsCount % 2 === 0);

      if (isExcessCalls) {
        return ERROR_MESSAGE;
      }

      return x + y;
    };
  }

  return getSum;
}

module.exports = makeRobotAccountant;
