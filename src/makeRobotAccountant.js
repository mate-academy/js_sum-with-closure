'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let count = 0;

  const getSum = (a) => {
    count++;

    const result = (b) => {
      if (count > 3 && count % 2 === 0) {
        return 'Bzzz... Error!';
      }

      return a + b;
    };

    return result;
  };

  return getSum;
}
module.exports = makeRobotAccountant;
