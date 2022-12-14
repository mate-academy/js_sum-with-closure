'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let count = 0;

  const getSum = (x) => {
    count++;

    const stop = count > 3 && count % 2 === 0;

    return (y) => {
      return stop
        ? `Bzzz... Error!`
        : x + y;
    };
  };

  return getSum;
}

module.exports = makeRobotAccountant;
