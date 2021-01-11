'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let count = 1;

  return function sum(x) {
    return function res(y) {
      if (count < 4) {
        count++;

        return x + y;
      }

      if (count % 2 === 0) {
        count++;

        return `Bzzz... Error!`;
      }

      return x + y;
    };
  };
}

module.exports = makeRobotAccountant;
