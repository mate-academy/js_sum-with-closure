'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let countNumber = 0;

  return function(x) {
    return function(y) {
      countNumber++;

      if (countNumber <= 3) {
        return x + y;
      }

      if ((countNumber % 2) === 0) {
        return 'Bzzz... Error!';
      }

      return x + y;
    };
  };
}

module.exports = makeRobotAccountant;
