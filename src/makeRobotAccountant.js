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

      return (callsCount > 3 && (callsCount % 2 === 0))
        ? 'Bzzz... Error!'
        : a + b;
    };

    return sum;
  };

  return getSum;
}

module.exports = makeRobotAccountant;
