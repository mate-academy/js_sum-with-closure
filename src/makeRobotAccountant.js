'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let cnt = 0;

  const getSum = (x) => (y) => {
    cnt++;

    if (cnt > 3 && cnt % 2 === 0) {
      return 'Bzzz... Error!';
    }

    return x + y;
  };

  return getSum;
}

module.exports = makeRobotAccountant;
