'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let count = 0;

  return function(firstNum) {
    return function(secondNum) {
      count++;

      if (count <= 3) {
        return firstNum + secondNum;
      }

      if (count % 2 === 0) {
        return 'Bzzz... Error!';
      }

      return firstNum + secondNum;
    };
  };
}

module.exports = makeRobotAccountant;
