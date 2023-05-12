'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let count = 1;

  const addNum = x => {

    const getSum = (y) => {
      if (count > 3 && count % 2 === 0) {
        count++;

        return 'Bzzz... Error!';
      }
      count++;

      return x + y;
    };

    return getSum;
  };

  return addNum;
}

module.exports = makeRobotAccountant;
