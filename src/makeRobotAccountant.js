'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let functionCalls = 0;

  return (firstNumber) => {
    functionCalls++;

    return (secondNumber) => {
      const isEven = functionCalls % 2 === 0;

      if (functionCalls > 3 && isEven) {
        return 'Bzzz... Error!';
      }

      return firstNumber + secondNumber;
    };
  };
}

module.exports = makeRobotAccountant;
