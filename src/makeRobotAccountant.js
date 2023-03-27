'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let callsCount = 0;

  function getSum(numberA) {
    return function(numberB) {
      callsCount++;

      if (callsCount % 2 === 0 && callsCount > 3) {
        return 'Bzzz... Error!';
      }

      return numberA + numberB;
    };
  };

  return getSum;
}

module.exports = makeRobotAccountant;
