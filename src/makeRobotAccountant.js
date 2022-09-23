'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let callCount = 0;

  return x => y => {
    callCount++;

    const breakCondition = callCount > 3 && callCount % 2 === 0;
    const sum = x + y;

    const result = breakCondition
      ? 'Bzzz... Error!'
      : sum;

    return result;
  };
}

module.exports = makeRobotAccountant;
