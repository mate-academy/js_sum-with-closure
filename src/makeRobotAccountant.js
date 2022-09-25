'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let processesCounter = 0;

  return (firstNumber) => {
    processesCounter++;

    return (secondNumber) => {
      if (processesCounter > 3 && processesCounter % 2 === 0) {
        return 'Bzzz... Error!';
      }

      return firstNumber + secondNumber;
    };
  };
}

module.exports = makeRobotAccountant;
