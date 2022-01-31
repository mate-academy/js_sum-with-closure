'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let count = 0;

  const getSum = (b) => {
    const f = (a) => {
      count++;

      if (count < 4 || count % 2 !== 0) {
        return a + b;
      } else {
        return 'Bzzz... Error!';
      }
    };

    return f;
  };

  return getSum;
}

module.exports = makeRobotAccountant;
