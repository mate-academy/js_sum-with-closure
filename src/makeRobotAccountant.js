'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let sum = 0;
  let addsCounter = 0;
  let getSumCalls = 0;

  const getSum = (x) => {
    addsCounter++;
    sum += x;

    if (addsCounter === 2) {
      const finalSum = sum;

      getSumCalls++;
      addsCounter = 0;
      sum = 0;

      return getSumCalls > 3 && getSumCalls % 2 === 0
        ? 'Bzzz... Error!'
        : finalSum;
    }

    return getSum;
  };

  return getSum;
}

module.exports = makeRobotAccountant;
