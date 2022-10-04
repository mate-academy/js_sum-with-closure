'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let amountOfCounts = 0;

  const getSum = numberA => {
    amountOfCounts++;

    return numberB => {
      if (amountOfCounts > 3 && amountOfCounts % 2 === 0) {
        return 'Bzzz... Error!';
      }

      return numberA + numberB;
    };
  };

  return getSum;
}

module.exports = makeRobotAccountant;
