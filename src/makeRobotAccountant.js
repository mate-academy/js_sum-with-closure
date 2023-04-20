'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let callsCount = 0;

  function callsCounter(firstSummand) {
    callsCount++;

    function sum(secoundSummand) {
      if (callsCount <= 3 || callsCount % 2 !== 0) {
        return firstSummand + secoundSummand;
      }

      return 'Bzzz... Error!';
    };

    return sum;
  };

  return callsCounter;
}

module.exports = makeRobotAccountant;
