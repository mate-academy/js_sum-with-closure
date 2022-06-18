'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let count = 0;
  let sum = 0;

  return function getFirst(arg1) {
    return function getSecond(arg2) {
      count++;

      if ((count < 4) || (count % 2 !== 0)) {
        sum = arg1 + arg2;

        return sum;
      }

      return 'Bzzz... Error!';
    };
  };
  // write code here
}

module.exports = makeRobotAccountant;
