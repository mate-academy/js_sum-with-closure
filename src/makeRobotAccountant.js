'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let invocationCount = 0;

  return (x) => {
    return (y) => {
      invocationCount++;

      if (invocationCount >= 4 && invocationCount % 2 === 0) {
        return 'Bzzz... Error!';
      }

      return x + y;
    };
  };
}

module.exports = makeRobotAccountant;
