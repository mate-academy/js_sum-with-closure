"use strict";

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  // write code here
  let callCount = 0;

  return function (a) {
    return function (b) {
      callCount++;

      if (callCount <= 3 || callCount % 2 === 1) {
        return a + b;
      }

      return "Bzzz... Error!";
    };
  };
}

module.exports = makeRobotAccountant;
