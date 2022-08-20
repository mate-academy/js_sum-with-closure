'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let count = 0;

  function getSum(firstAddend) {
    return function(secondAddend) {
      count++;

      if (count > 3 && count % 2 === 0) {
        return 'Bzzz... Error!';
      }

      return firstAddend + secondAddend;
    };
  };

  return getSum;
}

module.exports = makeRobotAccountant;
