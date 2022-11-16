'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let callCount = 0;

  const getSum = function(number1) {
    return function(number2) {
      callCount++;

      if (callCount <= 3 || callCount % 2 !== 0) {
        return number1 + number2;
      }

      return 'Bzzz... Error!';
    };
  };

  return getSum;
}

module.exports = makeRobotAccountant;
