"use strict";

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let callCount = 0;
  const errorMessage = "Bzzz... Error!";

  function getSum(a) {
    return function (b) {
      callCount++;

      if (callCount <= 3) {
        return a + b;
      } else if (callCount % 2 === 0) {
        return errorMessage;
      } else {
        return a + b;
      }
    };
  }

  return getSum;
}

module.exports = makeRobotAccountant;
