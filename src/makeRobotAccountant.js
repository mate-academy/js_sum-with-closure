'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let functionCall = 0;

  function getSum(x) {
    functionCall++;

    return function(y) {
      if (functionCall > 3 && (functionCall % 2 === 0)) {
        return 'Bzzz... Error!';
      }

      return x + y;
    };
  }

  return getSum;
}

module.exports = makeRobotAccountant;
