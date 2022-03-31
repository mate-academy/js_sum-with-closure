'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let firstCallCount = 0;
  let nextcallCount = 1;

  return function getSum(x) {
    return function result(y) {
      firstCallCount++;

      if (firstCallCount === 4 || nextcallCount === 2) {
        nextcallCount = 1;

        return 'Bzzz... Error!';
      }

      return x + y;
    };
  };
}

module.exports = makeRobotAccountant;
