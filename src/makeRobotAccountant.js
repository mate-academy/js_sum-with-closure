'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let count = 0;

  function getSum(num) {
    count++;

    function sumSecondCall(num2) {
      if (count > 3 && count % 2 === 0) {
        return 'Bzzz... Error!';
      }

      return num + num2;
    }

    return sumSecondCall;
  }

  return getSum;
}

module.exports = makeRobotAccountant;
