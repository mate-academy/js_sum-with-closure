'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let call = 0;
  const ErrorMessage = `Bzzz... Error!`;

  return (firstNumber) => {
    return (secondNumber) => {
      call++;

      if (call < 3 || call % 2 !== 0) {
        return firstNumber + secondNumber;
      }

      return ErrorMessage;
    };
  };
}
module.exports = makeRobotAccountant;
