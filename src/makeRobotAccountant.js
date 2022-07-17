'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let counter = 0;
  const getSum = x => {
    return y => {
      counter++;

      const sumResult = (counter > 3) && (counter % 2 === 0)
        ? 'Bzzz... Error!'
        : x + y;

      return sumResult;
    };
  };

  return getSum;
}

module.exports = makeRobotAccountant;
