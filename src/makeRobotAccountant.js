'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let callCount = 0;

  return function getSum(a) {
    callCount++;

    if (callCount <= 3 || (callCount > 3 && callCount % 2 !== 0)) {
      return function innerGetSum(b) {
        return a + b;
      };
    }

    return function innerGetError() {
      return 'Bzzz... Error!';
    };
  };
}
module.exports = makeRobotAccountant;
