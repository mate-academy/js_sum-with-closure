'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let call = 0;

  return function Sum(x) {
    return function getSum(y) {
      call++;

      if (call > 3 && call % 2 === 0) {
        return 'Bzzz... Error!';
      }

      return x + y;
    };
  };
}

module.exports = makeRobotAccountant;
