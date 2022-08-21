'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let count = 0;
  const getSum = (elFirst) => {
    count++;

    return (elSecond) => {
      const sum = elFirst + elSecond;

      return (count > 3 && count % 2 === 0)
        ? 'Bzzz... Error!'
        : sum;
    };
  };

  return getSum;
}

module.exports = makeRobotAccountant;
