'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let callsCount = 0;

  function callsCounter(summand1) {
    callsCount++;

    function sum(summand2) {
      if (callsCount <= 3 || callsCount % 2 !== 0) {
        return summand1 + summand2;
      }

      return 'Bzzz... Error!';
    };

    return sum;
  };

  return callsCounter;
}

module.exports = makeRobotAccountant;
