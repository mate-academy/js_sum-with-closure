'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  // write code here
  let count = 0;

  const getSum = (x) => {
    count++;

    const oddEven = (y) => {
      if (count >= 3 && count % 2 === 0) {
        return 'Bzzz... Error!';
      } else {
        return x + y;
      };
    };

    return oddEven;
  };

  return getSum;
}

module.exports = makeRobotAccountant;
