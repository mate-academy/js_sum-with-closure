"use strict";

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let callCount = 0;

  return function (a) {
    return function (b) {
      callCount++;

      return callCount > 3 && callCount % 2 === 0 ? "Bzzz... Error!" : a + b;
    };
  };
}

module.exports = makeRobotAccountant;
