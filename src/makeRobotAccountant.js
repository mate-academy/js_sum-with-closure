'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let count = 0;

  return function(num1) {
    return function(num2) {
      const sum = num1 + num2;
      count++;

      if (count <= 3 || count % 2 !== 0) {
        return sum;
      }

      return 'Bzzz... Error!';
    };
  };
}

module.exports = makeRobotAccountant;
