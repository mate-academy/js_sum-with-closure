'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let counter = 1;
  let summer = 0;

  const getSum = function(a) {
    if (counter <= 3 && summer !== 0) {
      const b = summer;

      counter++;
      summer = 0;

      return b + a;
    }

    if (counter % 2 !== 0 && summer !== 0) {
      const b = summer;

      counter++;
      summer = 0;

      return b + a;
    }

    if (counter <= 3 || counter % 2 !== 0) {
      summer = a;

      return getSum;
    }

    if (summer === 0) {
      summer = a;

      return getSum;
    }

    counter++;
    summer = 0;

    return 'Bzzz... Error!';
  };

  return getSum;
}

module.exports = makeRobotAccountant;
