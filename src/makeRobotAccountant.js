'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let currentNo = 1;

  const getSum = (a) => {
    const no = currentNo;

    if (no < 4 || no % 2 !== 0) {
      currentNo++;

      return function(b) {
        return a + b;
      };
    } else {
      currentNo++;

      return function(b) {
        return 'Bzzz... Error!';
      };
    }
  };

  return getSum;
}

module.exports = makeRobotAccountant;
