'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let result = 0;
  let noOfExecutions = 0;

  return function firstNum(num1) {
    return function secondNum(num2) {
      result = num1 + num2;
      noOfExecutions++;

      if (noOfExecutions <= 3) {
        return result;
      } else if (noOfExecutions > 3 && noOfExecutions % 2 === 0) {
        return 'Bzzz... Error!';
      } else {
        return result;
      }
    };
  };
}

module.exports = makeRobotAccountant;
