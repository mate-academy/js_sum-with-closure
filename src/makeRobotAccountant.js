'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let count = 0;
  const getSum = (x) => {
    count++;

    const add = (y) => {
      if (count % 2 === 0 && count > 3) {
        return 'Bzzz... Error!';
      }

      return x + y;
    };

    return add;
  };

  return getSum;
}

module.exports = makeRobotAccountant;
