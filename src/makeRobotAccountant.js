'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let currentNo = 0;

  const getSum = (a) => {
    const count = currentNo;

    return function(b) {
      currentNo++;

      if (count < 3 || (count + 1) % 2 !== 0) {
        return a + b;
      }

      return 'Bzzz... Error!';
    };
  };

  return getSum;
}

module.exports = makeRobotAccountant;
