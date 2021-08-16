'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let score = 1;

  const getSum = (x) => (y) => {
    if (score > 3 && score % 2 === 0) {
      score++;

      return 'Bzzz... Error!';
    } else {
      score++;

      return x + y;
    }
  };

  return getSum;
}

module.exports = makeRobotAccountant;
