'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let count = 0;
  const maxCalls = 3;

  return function getSum(x) {
    count++;

    return function(y) {
      if ((count % 2 === 0) && (count > maxCalls)) {
        return 'Bzzz... Error!';
      } else {
        return x + y;
      }
    };
  };
}

module.exports = makeRobotAccountant;
