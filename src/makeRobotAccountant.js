'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let calls = 0;
  let sum = 0;

  function getSum(a) {
    calls++;

    const pairs = calls / 2;

    if (pairs >= 4 && pairs % 2 === 0) {
      sum = 0;

      return 'Bzzz... Error!';
    }

    if (!Number.isInteger(pairs)) {
      sum += a;

      return getSum;
    }

    const result = sum + a;

    sum = 0;

    return result;
  }

  return getSum;
};

module.exports = makeRobotAccountant;
