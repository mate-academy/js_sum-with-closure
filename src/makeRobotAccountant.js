'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  // write code here
  let count = 0;
  const nomralWorkCycles = 3;
  const errorMessage = 'Bzzz... Error!';

  return (firstNumber) => {
    return (secondNumber) => {
      count++;

      if (count > nomralWorkCycles && count % 2 === 0) {
        return errorMessage;
      }

      return firstNumber + secondNumber;
    };
  };
}

module.exports = makeRobotAccountant;
