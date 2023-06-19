'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let callNum = 0;

  return (firstNum) => {
    return (secondNum) => {
      callNum++;

      if (callNum <= 3 || callNum % 2 !== 0) {
        return firstNum + secondNum;
      }

      return 'Bzzz... Error!';
    };
  };
}

module.exports = makeRobotAccountant;
