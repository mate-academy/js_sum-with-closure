'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let countCalls = 0;
  let isEvenCall;

  return function startGetSum(firstTerm) {
    return function endGetSum(secondTerm) {
      isEvenCall = countCalls < 3 ? false : !isEvenCall;
      countCalls += countCalls < 3 ? 1 : 0;

      return isEvenCall ? 'Bzzz... Error!' : firstTerm + secondTerm;
    };
  };
}

module.exports = makeRobotAccountant;
