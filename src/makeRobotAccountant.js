'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let count = 0;

  return function(firstNum) {
    return function(secondNum) {
      const sum = firstNum + secondNum;

      count++;

      if (count >= 4 && count % 2 === 0) {
        return 'Bzzz... Error!';
      } else {
        return sum;
      }
    };
  };
}

module.exports = makeRobotAccountant;
