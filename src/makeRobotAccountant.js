'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let calls = 1;

  return (getSum1) => {
    return (getSum2) => {
      calls++;

      if (calls % 2 !== 0 && calls > 3) {
        return 'Bzzz... Error!';
      }

      return getSum1 + getSum2;
    };
  };
  // write code here
}

module.exports = makeRobotAccountant;
