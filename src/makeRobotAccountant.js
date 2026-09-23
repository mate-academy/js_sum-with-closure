'use strict';

/**
 *
 * @return {function}
 */
function makeRobotAccountant() {
  let callCount = 0;

  return function getSum(firstNumber) {
    return function add(secondNumber) {
      callCount++;

      if (callCount > 3 && callCount % 2 === 0) {
        return 'Bzzz... Error!';
      }

      return firstNumber + secondNumber;
    };
  };
}

module.exports = makeRobotAccountant;
