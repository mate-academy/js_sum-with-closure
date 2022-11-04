'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let countOperations = 0;

  return (num1) => {
    return (num2) => {
      countOperations++;

      if (countOperations > 3 && countOperations % 2 === 0) {
        return `Bzzz... Error!`;
      }

      return num1 + num2;
    };
  };
}

module.exports = makeRobotAccountant;
