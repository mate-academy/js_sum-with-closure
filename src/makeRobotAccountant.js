'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let count = 0;
  const getSum = (num) => {
    count++;

    const getSum2 = (n) => {
      if (count > 3 && count % 2 === 0) {
        return 'Bzzz... Error!';
      }

      return num + n;
    };

    return getSum2;
  };

  return getSum;
}

module.exports = makeRobotAccountant;
