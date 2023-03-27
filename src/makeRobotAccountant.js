'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let count = 0;
  const getSum = (a) => {
    return (b) => {
      count++;

      if (count % 2 === 0 && count > 3) {
        return 'Bzzz... Error!';
      }

      return a + b;
    };
  };

  return getSum;
}

module.exports = makeRobotAccountant;
