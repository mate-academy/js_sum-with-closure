'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let count = 0;

  const getSum = (a) => {
    count++;

    const limit = count > 3 && count % 2 === 0;

    return (b) => {
      if (limit) {
        return 'Bzzz... Error!';
      }

      return a + b;
    };
  };

  return getSum;
}
module.exports = makeRobotAccountant;
