'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let count = 0;

  return function getSum(num1) {
    count++;

    return function(num2) {
      if (count >= 4 && count % 2 === 0) {
        return 'Bzzz... Error!';
      } else {
        return num1 + num2;
      }
    };
  };
}
module.exports = makeRobotAccountant;
