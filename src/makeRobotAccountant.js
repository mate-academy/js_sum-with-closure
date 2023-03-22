'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let count = 0;

  const getSum = (firstNum) => {
    count++;

    return count > 3 && count % 2 === 0
      ? () => 'Bzzz... Error!'
      : secondNum => firstNum + secondNum;
  };

  return getSum;
}

module.exports = makeRobotAccountant;
