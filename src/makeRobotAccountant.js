'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let count = 1;

  const getSum = (a) => {
    return (b) => {
      if (count <= 3 || count % 2 === 1) {
        count++;

        return a + b;
      }

      count++;

      return 'Bzzz... Error!';
    };
  };

  return getSum;
}

module.exports = makeRobotAccountant;
