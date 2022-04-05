'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let calls = 0;
  const maxCalls = 3;

  function getSum(num1) {
    calls++;

    return function(num2) {
      if (calls <= maxCalls
      || calls % 2 === 1) {
        return num1 + num2;
      } else {
        return 'Bzzz... Error!';
      }
    };
  }

  return getSum;
}

module.exports = makeRobotAccountant;
