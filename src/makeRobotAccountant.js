'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let count = 3;

  const result = function add(num1) {
    return function(num2) {
      if (count === 0) {
        count = 1;

        return 'Bzzz... Error!';
      }

      count--;

      return num1 + num2;
    };
  };

  return result;
}

module.exports = makeRobotAccountant;
