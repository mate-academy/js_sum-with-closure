'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let callsCounter = 0;

  return (firstNumber) => (secondNumber) => {
    callsCounter++;

    if (callsCounter > 3 && callsCounter % 2 === 0) {
      return 'Bzzz... Error!';
    }

    return firstNumber + secondNumber;
  };
}

module.exports = makeRobotAccountant;
