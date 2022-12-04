'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let callCounter = 0;

  return (firstNum) => {
    return (secondNum) => {
      const sum = firstNum + secondNum;

      callCounter++;

      if (callCounter > 3 && callCounter % 2 === 0) {
        return 'Bzzz... Error!';
      }

      return sum;
    };
  };
}

module.exports = makeRobotAccountant;
