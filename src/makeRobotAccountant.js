"use strict";

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let callNumber = 0;

  return (firstNumber) => {
    callNumber += 1;

    const currentCall = callNumber;

    return (secondNumber) => {
      const sum = firstNumber + secondNumber;

      if (currentCall > 3 && currentCall % 2 === 0) {
        return "Bzzz... Error!";
      }

      return sum;
    };
  };
}

module.exports = makeRobotAccountant;
