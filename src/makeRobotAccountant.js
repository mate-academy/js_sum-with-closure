'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let count = 0;

  const getSum = x => y => {
    count++;

    return (count > 3 && count % 2 === 0) ? 'Bzzz... Error!' : x + y;
  };

  return getSum;
}

module.exports = makeRobotAccountant;
