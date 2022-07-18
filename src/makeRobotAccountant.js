'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let count = 0;

  return (firstNumber) => {
    return (secondNUmber) => {
      if (count < 3) {
        count++;

        return firstNumber + secondNUmber;
      }
      count = 2;

      return `Bzzz... Error!`;
    };
  };
}

module.exports = makeRobotAccountant;
