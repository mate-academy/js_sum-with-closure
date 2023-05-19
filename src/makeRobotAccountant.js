'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let callCount = 0;
  let resetCallCount = 0;

  const getSum = (a) => {
    return (b) => {
      if (callCount === 3) {
        callCount++;
        resetCallCount++;

        return 'Bzzz... Error!';
      };

      if (callCount > 3 && resetCallCount % 2 !== 0) {
        resetCallCount++;

        return a + b;
      };

      if (callCount > 3 && resetCallCount % 2 === 0) {
        resetCallCount++;

        return 'Bzzz... Error!';
      }

      callCount++;

      return a + b;
    };
  };

  return getSum;
};

module.exports = makeRobotAccountant;
