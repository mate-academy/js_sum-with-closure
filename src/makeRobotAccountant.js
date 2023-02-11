'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let count = 0;
  return function (num1) {
    return function (num2) {
      count++;
      const sum = num1 + num2;

      if (count <= 3) {
        return sum;
      }

      return count % 2 !== 0
        ? sum
        : 'Bzzz... Error!';
    };
  };
}

module.exports = makeRobotAccountant;
