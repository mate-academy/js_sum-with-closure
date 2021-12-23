'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  // write code here
  let count = 0;

  const countSum = (value = 0) => {
    count++;

    return (secondValue = 0) => count > 3 && count % 2 === 0
      ? 'Bzzz... Error!'
      : value + secondValue;
  };

  return countSum;
}

module.exports = makeRobotAccountant;
