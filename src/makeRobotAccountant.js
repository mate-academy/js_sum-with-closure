'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let call = 0;
  const ErrorMessage = `Bzzz... Error!`;

  return (firstNumber) => {
    call++;

    return (secondNumber) => {
      if (call < 3 || call % 2 !== 0) {
        return firstNumber + secondNumber;
      } else {
        return ErrorMessage;
      }
    };
  };
}
module.exports = makeRobotAccountant;
