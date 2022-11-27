'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let launchCount = 0;

  return function getSum(x) {
    return function(y) {
      launchCount++;

      if (launchCount <= 3 || launchCount % 2 !== 0) {
        return x + y;
      } else {
        return 'Bzzz... Error!';
      }
    };
  };
}

module.exports = makeRobotAccountant;
