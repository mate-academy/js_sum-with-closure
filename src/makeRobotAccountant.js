'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let count = 1;

  const sum = (a) => (b) => {
    if (count < 4) {
      count++;

      return a + b;
    }

    if ((count % 2) === 0) {
      count++;

      return 'Bzzz... Error!';
    }
    count++;

    return a + b;
  };

  return sum;
}

module.exports = makeRobotAccountant;
