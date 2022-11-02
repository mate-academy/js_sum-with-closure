'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let count = 0;

  const firstNumber = (a) => {
    return function secondNumber(b) {
      count++;

      if (count <= 3 || count % 2 !== 0) {
        return a + b;
      }

      return 'Bzzz... Error!';
    };
  };

  return firstNumber;
}

module.exports = makeRobotAccountant;
