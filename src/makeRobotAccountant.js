'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let callsCounter = 0;
  const сorrectCalls = 4;

  return (firstNum) => {
    callsCounter++;

    return (secondNum) => {
      if (callsCounter >= сorrectCalls && callsCounter % 2 === 0) {
        return `Bzzz... Error!`;
      }

      return firstNum + secondNum;
    };
  };
}

module.exports = makeRobotAccountant;
