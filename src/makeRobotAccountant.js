'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let count = 0;

  return function(num1) {
    return function(num2) {
      count++;

      if (count < 4 || count % 2 === 1) {
        return num1 + num2;
      }

      return 'Bzzz... Error!';
    };
  };
}

module.exports = makeRobotAccountant;
