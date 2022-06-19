'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let calls = 0;
  const limitOfCalls = 3;

  const firstBatch = (firstAmount) => {
    calls++;

    const secondBatch = (secondAmount) => {
      if (calls > limitOfCalls && calls % 2 === 0) {
        return 'Bzzz... Error!';
      } else {
        return firstAmount + secondAmount;
      }
    };

    return secondBatch;
  };

  return firstBatch;
}

module.exports = makeRobotAccountant;
