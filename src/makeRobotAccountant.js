'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let count = 0;

  const getSum = (a) => {
    count++;

    return (b) => (count > 3 && count % 2 === 0)
      ? 'Bzzz... Error!'
      : a + b;
  };

  return getSum;
}

module.exports = makeRobotAccountant;
