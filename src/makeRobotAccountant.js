'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let count = 0;

  const isUsageOverLimit = () => count > 3;
  const isUsageCountEven = () => count % 2 === 0;

  return a => {
    count++;

    return b => isUsageOverLimit() && isUsageCountEven()
      ? 'Bzzz... Error!'
      : a + b;
  };
}

module.exports = makeRobotAccountant;
