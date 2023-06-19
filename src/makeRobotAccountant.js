'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let iterationCounter = 0;

  const getSum = (number) => {
    return (number2) => {
      if (iterationCounter >= 3 && iterationCounter % 2 === 1) {
        iterationCounter++;

        return 'Bzzz... Error!';
      }

      iterationCounter++;

      return number + number2;
    };
  };

  return getSum;
}

module.exports = makeRobotAccountant;
