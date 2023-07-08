'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let result = 0;
  let count = 0;

  function getSum(x) {
    function getSumy(y) {
      if (count >= 3) {
        count = 0;

        return 'Bzzz... Error!';
      }
      result = x + y;
      count++;

      return result;
    }

    return getSumy;
  }

  return getSum;
}

module.exports = makeRobotAccountant;
