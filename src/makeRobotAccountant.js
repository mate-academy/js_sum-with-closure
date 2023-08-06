'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let count = 0;

  function getSum(number) {
    count++;

    if (count <= 3) {
      return function(nextNumber) {
        return number + nextNumber;
      };
    } else {
      return function(nextNumber) {
        if (count % 2 === 0) {
          return 'Bzzz... Error!';
        } else {
          return number + nextNumber;
        }
      };
    }
  }

  return getSum;
}

module.exports = makeRobotAccountant;
