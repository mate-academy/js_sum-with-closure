'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let result = 0;
  let count = 1;

  function getSum(x) {
    function getSumy(y) {
      if (count > 3 && count % 2 === 0) {
        count++;

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
