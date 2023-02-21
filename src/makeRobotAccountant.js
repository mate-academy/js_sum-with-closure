'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let countOfOperation = 0;

  const getSum = (a) => {
    const add = (b) => {
      countOfOperation++;

      if (countOfOperation > 3 && countOfOperation % 2 === 0) {
        return 'Bzzz... Error!';
      }

      return a + b;
    };

    return add;
  };

  return getSum;
}

module.exports = makeRobotAccountant;
