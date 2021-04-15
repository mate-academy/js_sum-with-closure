'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let count = 0;

  const getSum = (add1) => {
    const sum = (add2) => {
      count++;

      if (count > 3 && count % 2 === 0) {
        return 'Bzzz... Error!';
      };

      return add1 + add2;
    };

    return sum;
  };

  return getSum;
};

module.exports = makeRobotAccountant;
