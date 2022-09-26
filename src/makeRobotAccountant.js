'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let calls = 0;

  const getSum = (x) => {
    calls++;

    return (y) => {
      if (calls <= 3 || calls % 2 !== 0) {
        return x + y;
      }

      return 'Bzzz... Error!';
    };
  };

  return getSum;
}

module.exports = makeRobotAccountant;
