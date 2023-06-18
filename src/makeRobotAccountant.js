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

      if (callNum <= 3) {
        return firstNum + secondNum;
      }

      return callNum % 2 === 0 ? 'Bzzz... Error!' : firstNum + secondNum;
    };
  };
}

module.exports = makeRobotAccountant;
