'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let getSumCalls = 0;

  const getSum = (value1) => (value2) => {
    getSumCalls++;

    return getSumCalls > 3 && getSumCalls % 2 === 0
      ? 'Bzzz... Error!'
      : value1 + value2;
  };

  return getSum;
}

module.exports = makeRobotAccountant;
