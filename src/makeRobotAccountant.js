'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let attemptsCount = 0;

  return function getSum(a) {
    attemptsCount++;

    return function second(b) {
      if (attemptsCount > 3 && attemptsCount % 2 === 0) {
        return 'Bzzz... Error!';
      }

      return a + b;
    };
  };
}

module.exports = makeRobotAccountant;
