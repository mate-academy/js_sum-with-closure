'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let count = 0;

  return function getFirst(arg1) {
    return function getSecond(arg2) {
      count++;

      if (count < 4 || count % 2 !== 0) {
        return arg1 + arg2;
      }

      return 'Bzzz... Error!';
    };
  };
  // write code here
}

module.exports = makeRobotAccountant;
