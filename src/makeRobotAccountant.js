'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let result = 0;

  return (x) => {
    result++;

    return (y) => {
      if (result > 3 && result % 2 === 0) {
        return `Bzzz... Error!`;
      }

      return x + y;
    };
  };
}

module.exports = makeRobotAccountant;
