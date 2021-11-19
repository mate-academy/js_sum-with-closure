"use strict";

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let cashCount = 0;

  return (a) => {
    return (b) => {
      ++cashCount;

      if (cashCount % 2 === 0 && cashCount !== 2) {
        return "Bzzz... Error!";
      }

      return a + b;
    };
  };
}

module.exports = makeRobotAccountant;
