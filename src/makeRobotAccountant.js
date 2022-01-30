'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  // write code here
  let call = 0;

  return (firstNumber) => {
    return (secondNumber) => {
      call++;

      const sum = firstNumber + secondNumber;

      if (call > 3 && call % 2 !== 1) {
        return 'Bzzz... Error!';
      }

      return sum;
    };
  };
}

module.exports = makeRobotAccountant;
