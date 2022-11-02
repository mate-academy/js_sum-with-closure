'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let robotCount = 0;

  return function(a) {
    return function(b) {
      robotCount++;

      if (robotCount >= 4 && robotCount % 2 === 0) {
        return 'Bzzz... Error!';
      }

      return a + b;
    };
  };
}

module.exports = makeRobotAccountant;
