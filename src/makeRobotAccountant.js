'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let countOfOperation = 0;

  const getSum = (a) => {
    countOfOperation++;

    const add = (b) => {
      if (countOfOperation <= 3) {
        return a + b;
      }

      if (countOfOperation > 3 && countOfOperation % 2 !== 0) {
        return a + b;
      }

      return 'Bzzz... Error!';
    };

    return add;
  };

  return getSum;
}

module.exports = makeRobotAccountant;
