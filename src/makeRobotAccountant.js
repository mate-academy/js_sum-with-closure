'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let count = 0;
  // write code here
  const getSum = (firstArgument) => {
    count++;

    const getSumSecond = (secondArgument) => {
      const sum = firstArgument + secondArgument;

      if (count <= 3 || count % 2 !== 0) {
        return sum;
      } else {
        return 'Bzzz... Error!';
      }
    };

    return getSumSecond;
  };

  return getSum;
}

module.exports = makeRobotAccountant;
