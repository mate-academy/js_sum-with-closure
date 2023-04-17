'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let callsDone = 0;

  return function(firstNum) {
    return function(secondNum) {
      callsDone++;

      if (callsDone % 2 === 0 && callsDone > 3) {
        return 'Bzzz... Error!';
      } else {
        return firstNum + secondNum;
      }
    };
  };
}

module.exports = makeRobotAccountant;
