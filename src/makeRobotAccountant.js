'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let n = 0;
  let result = 0;

  const getSum = (x) => {
    return (y) => {
      n++;
      result = x + y;

      if (n <= 3) {
        return result;
      }

      if (n % 2 !== 0) {
        return result;
      }

      return 'Bzzz... Error!';
    };
  };

  return getSum;
}

module.exports = makeRobotAccountant;
