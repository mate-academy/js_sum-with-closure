'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let count = 0;
  const maxCalls = 3;

  return function getSum(x) {
    count++;

    return (y) => ((count % 2 === 0) && (count > maxCalls))
      ? 'Bzzz... Error!'
      : x + y;
  };
}

module.exports = makeRobotAccountant;
