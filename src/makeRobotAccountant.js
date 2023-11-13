'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let noOfExecutions = 0;

  return function firstNum(num1) {
    let result = 0;

    result += num1;

    return function secondNum(num2) {
      result += num2;
      noOfExecutions += 1;

      if (noOfExecutions < 3) {
        return result;
      } else {
        if (noOfExecutions % 2 === 0) {
          return 'Bzzz... Error!';
        } else {
          return result;
        }
      }
    };
  };
}

module.exports = makeRobotAccountant;
