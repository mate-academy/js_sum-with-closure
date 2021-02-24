'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let callFunction = 0;

  return (firstNumber) => {
    callFunction++;

    return (secondNumber) => {
      const isEven = callFunction % 2 === 0;

      if (callFunction > 3 && isEven) {
        return 'Bzzz... Error!';
      }

      return firstNumber + secondNumber;
    };
  };
}

module.exports = makeRobotAccountant;
