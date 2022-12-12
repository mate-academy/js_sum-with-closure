"use strict";

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let count = 0;

  return (num) => {
    return (secondNum, firstNum = num) => {
      count++;

      if (count > 3 && count % 2 === 0) {
        return "Bzzz... Error!";
      }

      return secondNum + firstNum;
    };
  };
}

module.exports = makeRobotAccountant;
