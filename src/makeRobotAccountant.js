'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let callCount = 0;

  return function(num1) {
    return function(num2) {
      callCount++;

      if (callCount <= 3 || callCount % 2 !== 0) {
        return num1 + num2;
      } else {
        return 'Bzzz... Error!';
      }
    };
  };
}

module.exports = makeRobotAccountant;
