'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let count = 0;

  return function counter(a) {
    count++;

    return function sum(b) {
      if (count > 3 && count % 2 === 0) {
        return `Bzzz... Error!`;
      }

      return a + b;
    };
  };
}

module.exports = makeRobotAccountant;
