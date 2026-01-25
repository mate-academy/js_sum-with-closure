'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let countsOfCalls = 0;

  return function(a) {
    return function(b) {
      countsOfCalls++

      if (countsOfCalls <= 3) {
        return a + b;
      }

      if (countsOfCalls > 3 && countsOfCalls % 2 === 0) {
        return 'Bzz... Error!';
      } else {
        return a + b;
      }
    }
  }
}

module.exports = makeRobotAccountant;
