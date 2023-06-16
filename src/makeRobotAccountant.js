'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let fineWork = 3;

  function inner(num1) {
    function getSum(num2) {
      fineWork--;

      if (fineWork < 0 && fineWork % 2 === -1) {
        return 'Bzzz... Error!';
      }

      return num1 + num2;
    }

    return getSum;
  }

  return inner;
}

module.exports = makeRobotAccountant;
