'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  // write code here
  let callCount = 0;

  return (firstNum) => {
    return (secondNum) => {
      callCount++;

      return callCount < 4 || callCount & 1
        ? firstNum + secondNum
        : 'Bzzz... Error!';
    };
  };
};

module.exports = makeRobotAccountant;
