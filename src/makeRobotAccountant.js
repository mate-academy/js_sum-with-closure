'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let iterationCounter = 0;

  const getSum = (number) => {
    return (number2) => {
      const result = number + number2;

      if (iterationCounter >= 3 && iterationCounter % 2 === 1) {
        iterationCounter++;

        return 'Bzzz... Error!';
      }

      iterationCounter++;

      return result;
    };
  };

  return getSum;
}

module.exports = makeRobotAccountant;
