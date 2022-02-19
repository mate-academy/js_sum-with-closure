'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let count = 0;

  const getSum = firstParam => secondParam => {
    count++;

    if (count % 2 === 0 && count > 3) {
      return 'Bzzz... Error!';
    }

    return firstParam + secondParam;
  };

  return getSum;
}

module.exports = makeRobotAccountant;
