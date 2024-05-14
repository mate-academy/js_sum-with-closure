'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  // write code here
  let callCounter = 0;

  function getSum(firstValue) {
    callCounter++;

    function calculate(secondValue) {
      return (callCounter > 3 && callCounter % 2 === 0)
        ? 'Bzzz... Error!'
        : firstValue + secondValue;
    }

    return calculate;
  }

  return getSum;
}

module.exports = makeRobotAccountant;
