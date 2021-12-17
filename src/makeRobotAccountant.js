'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  const sum = 0;
  let count = 0;

  const getSum = (a) => {
    const firstIteration = sum + a;

    return (b) => {
      const secondIteration = firstIteration + b;

      count++;

      if (count > 3) {
        count = 0;

        return 'Bzzz... Error!';
      }

      return secondIteration;
    };
  };

  return getSum;
}

module.exports = makeRobotAccountant;
