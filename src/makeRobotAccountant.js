'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let countOfOperations = 0;
  const getSum = (x) => {
    countOfOperations++;

    return (y) => {
      if (countOfOperations >= 3 && countOfOperations % 2 === 0) {
        return 'Bzzz... Error!';
      }

      return x + y;
    };
  };

  return getSum;
}

module.exports = makeRobotAccountant;
