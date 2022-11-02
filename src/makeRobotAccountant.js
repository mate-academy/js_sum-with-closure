'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let callsCount = 0;
  const getSum = (a) => {
    const sum = (b) => {
      callsCount++;

      if (callsCount > 3 && (callsCount % 2 === 0)) {
        return 'Bzzz... Error!';
      }

      return a + b;
    };

    return sum;
  };

  return getSum;
}

module.exports = makeRobotAccountant;
