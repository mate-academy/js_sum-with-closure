'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let count = 0;

  const getSum = (first) => (second) => {
    count++;

    const sum = first + second;

    if (count <= 3) {
      return sum;
    }

    return count % 2 !== 0 ? sum : 'Bzzz... Error!';
  };

  return getSum;
}

module.exports = makeRobotAccountant;
