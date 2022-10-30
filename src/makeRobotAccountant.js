'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let numbersOfCall = 0;

  const firstFunc = (x) => {
    const result = (y) => {
      numbersOfCall++;

      if (numbersOfCall <= 3 || numbersOfCall % 2 !== 0) {
        const sum = x + y;

        return sum;
      }

      return 'Bzzz... Error!';
    };

    return result;
  };

  return firstFunc;
}

module.exports = makeRobotAccountant;
