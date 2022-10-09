'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  // write code here
  let count = 0;

  return function getSum(numberOne) {
    return function(numberTwo) {
      count++;

      if (count > 3 && count % 2 === 0) {
        return 'Bzzz... Error!';
      }

      return numberOne + numberTwo;
    };
  };
}

module.exports = makeRobotAccountant;
