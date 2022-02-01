'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  // write code here
  let count = 0;

  return function(firstNum) {
    return function(secondNum) {
      count++;

      if (count > 3 && count % 2 === 0) {
        return 'Bzzz... Error!';
      }

      return firstNum + secondNum;
    };
  };
}

module.exports = makeRobotAccountant;
