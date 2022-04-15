'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  // write code here
  let result = 0;
  let count = 0;

  const getSum = (a) => {
    const c = (b) => {
      result = a + b;
      count++;

      if (count > 3 && count % 2 === 0) {
        return 'Bzzz... Error!';
      } else {
        return result;
      }
    };

    return c;
  };

  return getSum;
}

module.exports = makeRobotAccountant;
