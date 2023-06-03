'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let attemts = 0;
  const errorMessage = 'Bzzz... Error!';

  const getSum = (a) => b => {
    const sum = a + b;

    attemts++;

    if (attemts > 3 && attemts % 2 === 0) {
      return errorMessage;
    };

    return sum;
  };

  return getSum;
}

module.exports = makeRobotAccountant;
