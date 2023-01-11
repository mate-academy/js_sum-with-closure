'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let count = 0;

  return function(firstNum) {
    return function(secondNum) {
      count++;

      return count <= 3 || count % 2 !== 0
        ? firstNum + secondNum
        : 'Bzzz... Error!';
    };
  };
}
module.exports = makeRobotAccountant;
