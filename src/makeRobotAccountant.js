'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let callCount = 0;

  const getSum = (num1) => (num2) => {
    callCount++;

    return callCount <= 3
      ? num1 + num2
      : callCount % 2 === 0
        ? 'Bzzz... Error!'
        : num1 + num2;
  };

  return getSum;
}

module.exports = makeRobotAccountant;
