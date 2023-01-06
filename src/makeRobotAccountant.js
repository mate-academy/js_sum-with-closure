'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  // write code here
  let numbersOfCalls = 0;

  const sum = (a) => {
    const result = (b) => {
      numbersOfCalls++;

      if (numbersOfCalls <= 3 || numbersOfCalls % 2 !== 0) {
        return a + b;
      }

      return 'Bzzz... Error!';
    };

    return result;
  };

  return sum;
}

module.exports = makeRobotAccountant;
