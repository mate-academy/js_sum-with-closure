'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let callCounts = 0;

  return function(num1) {
    return function(num2) {
      callCounts++;

      if (callCounts <= 3 || callCounts % 2 !== 0) {
        return num1 + num2;
      } else {
        return 'Bzzz... Error!';
      }
    };
  };
}

module.exports = makeRobotAccountant;
