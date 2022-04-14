'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let count = 0;

  return (num1) => (num2) => {
    if (count === 3) {
      count--;

      return `Bzzz... Error!`;
    } else {
      count++;

      return (num1 + num2);
    }
  };
}

module.exports = makeRobotAccountant;
