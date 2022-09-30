'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let count = 0;
  const getSum = (x) => {
    return function(y) {
      const sum = x + y;

      count++;

      let res;

      if (count <= 3 || count % 2 !== 0) {
        res = sum;
      } else {
        res = 'Bzzz... Error!';
      }

      return res;
    };
  };

  return getSum;
}

module.exports = makeRobotAccountant;
