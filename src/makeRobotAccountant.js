'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let call = 0;

  return (firstNumber) => {
    return (secondNumber) => {
      call++;

      if (call % 2 === 0 && call > 3) {
        return 'Bzzz... Error!';
      }

      return firstNumber + secondNumber;
    };
  };
}

module.exports = makeRobotAccountant;
