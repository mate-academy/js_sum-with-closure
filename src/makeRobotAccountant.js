'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let countOfStart = 0;

  return function(a) {
    return function(b) {
      if (countOfStart < 3) {
        countOfStart++;

        return a + b;
      } else {
        countOfStart--;

        return `Bzzz... Error!`;
      }
    };
  };
}

module.exports = makeRobotAccountant;
