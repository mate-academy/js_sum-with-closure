'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let count = 0;

  const getSum = (a) => {
    const sum = (b) => {
      count++;

      if (count <= 3 || count % 2 !== 0) {
        return a + b;
      } else {
        return 'Bzzz... Error!';
      }
    };

    return sum;
  };

  return getSum;
}

module.exports = makeRobotAccountant;
