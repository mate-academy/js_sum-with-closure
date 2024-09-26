'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let functionCallCount = 0;
  const sum = (x) => (y) => {
    functionCallCount++;

    if (functionCallCount > 3 && functionCallCount % 2 === 0) {
      return 'Bzzz... Error!';
    }

    return x + y;
  };

  return sum;
}

module.exports = makeRobotAccountant;
