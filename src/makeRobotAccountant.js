'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  // write code here
  let count = 0;

  return function getSum(x) {
    count++;

    return function secNum(y) {
      return ((((count % 2) !== 0) || (count <= 3)) ? x + y : 'Bzzz... Error!');
    };
  };
}

module.exports = makeRobotAccountant;
