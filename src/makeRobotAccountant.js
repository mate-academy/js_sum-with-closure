'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let count = 0;
  const getSum = (x) => {
    const func = (y) => {
      count++;

      if (count >= 4 && count % 2 === 0) {
        return 'Bzzz... Error!';
      };

      return x + y;
    };

    return func;
  };

  return getSum;
}

module.exports = makeRobotAccountant;
