'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let iterationRound = 0;

  const adder = (startValue) => {
    let sum = startValue;

    const added = (addedValue) => {
      sum += addedValue;
      iterationRound++;

      if (iterationRound > 3 && iterationRound % 2 === 0) {
        return `Bzzz... Error!`;
      }

      return sum;
    };

    return added;
  };

  return adder;
}

module.exports = makeRobotAccountant;
