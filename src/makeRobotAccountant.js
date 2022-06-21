'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let count = 0;

  const getFirstNumber = (x) => {
    count++;

    const getSum = (y) => {
      if (count < 4 || count % 2 !== 0) {
        return x + y;
      }

      return 'Bzzz... Error!';
    };

    return getSum;
  };

  return getFirstNumber;
}

module.exports = makeRobotAccountant;
