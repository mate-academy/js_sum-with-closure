'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let result = 0;

  const getSum = (a) => {
    result++;

    return (b) => {
      if (result > 3 && result % 2 === 0) {
        return 'Bzzz... Error!';
      }

      return a + b;
    };
  };

  return getSum;
}

module.exports = makeRobotAccountant;
