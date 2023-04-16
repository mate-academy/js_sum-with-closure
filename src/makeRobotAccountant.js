'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let calls = 0;

  const sum = (digitOne) => {
    return (digitTwo) => {
      calls++;

      if (calls > 3 && calls % 2 === 0) {
        return `Bzzz... Error!`;
      }

      return digitOne + digitTwo;
    };
  };

  return sum;
}

module.exports = makeRobotAccountant;
