'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  // write code here
  let count = 0;

  const getSum = (arg1) => {
    count++;

    const res = (arg2) => {
      if (count > 3) {
        if (count % 2 === 0) {
          return 'Bzzz... Error!';
        } else {
          return arg1 + arg2;
        }
      }

      return arg1 + arg2;
    };

    return res;
  };

  return getSum;
}

module.exports = makeRobotAccountant;
