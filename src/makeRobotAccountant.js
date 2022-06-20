'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let count = 0;
  const calls = (a) => {
    const sum = (b) => {
      count++;

      if (count % 2 !== 0 || count <= 3) {
        return a + b;
      }

      return 'Bzzz... Error!';
    };

    return sum;
  };

  return calls;
}

module.exports = makeRobotAccountant;
