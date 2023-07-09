'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let count = 0;

  const getSum = (a) => {
    const add = (b) => {
      if (count === 3) {
        count--;

        return 'Bzzz... Error!';
      }

      count++;

      return a + b;
    };

    return add;
  };

  return getSum;
}

module.exports = makeRobotAccountant;
