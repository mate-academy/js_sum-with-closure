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

      if (count <= 3 || count % 2 !== 0) {
        return num1 + num2;
      } else {
        return 'Bzzz... Error!';
      }
    };
  };
}

module.exports = makeRobotAccountant;
