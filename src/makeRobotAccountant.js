'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  // write code here
  let callCounter = 0;

  return function(firstValue) {
    return function(secondValue) {
      callCounter++;

      if (callCounter > 3 && callCounter % 2 === 0) {
        return `Bzzz... Error!`;
      }

      return firstValue + secondValue;
    };
  };
}
module.exports = makeRobotAccountant;
