'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let count = 0;
  const getSum = (num) => {
    const x = (n) => {
      count++;

      if (count > 3 && Number.isInteger(count / 2)) {
        return 'Bzzz... Error!';
      }

      return n + num;
    };

    return x;
  };

  return getSum;
}

module.exports = makeRobotAccountant;
