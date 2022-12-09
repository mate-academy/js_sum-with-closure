'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let count = 0;

  return (num1) => {
    return (num2) => {
      count++;

      return (count % 2 === 0 && count > 3)
        ? `Bzzz... Error!`
        : num1 + num2;
    };
  };
}

module.exports = makeRobotAccountant;
