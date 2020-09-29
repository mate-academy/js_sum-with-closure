'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let iterationRound = 0;

  const firstPart = (n) => {
    let sum = n;

    const secondPart = (m) => {
      sum += m;
      iterationRound++;

      if (iterationRound > 3 && iterationRound % 2 === 0) {
        return `Bzzz... Error!`;
      }

      return sum;
    };

    return secondPart;
  };

  return firstPart;
}

module.exports = makeRobotAccountant;
