'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let countStep = 3;

  function getSum(a) {
    function getTotal(b) {
      if (countStep === 0) {
        countStep++;

        return 'Bzzz... Error!';
      }

      countStep--;

      return a + b;
    }

    return getTotal;
  };

  return getSum;
}

module.exports = makeRobotAccountant;
