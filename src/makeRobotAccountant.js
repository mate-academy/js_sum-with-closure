'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let count = 0;
  const getSum = (a) => (b) => {
    count++;

    if (count < 3 || count % 2 !== 0) {
      return a + b;
    }

    return 'Bzzz... Error!';
  };

  return getSum;
}

module.exports = makeRobotAccountant;
