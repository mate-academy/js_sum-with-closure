'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let count = 0;

  const getSum = (x) => {
    count++;

    const sum = (y) => x + y;

    return (count <= 3 || count % 2) ? sum : () => 'Bzzz... Error!';
  };

  return getSum;
}

module.exports = makeRobotAccountant;
