'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let callsCounter = 0;

  const addFirstNum = (firstNumber) => {
    const addSecondNum = (secondNumber) => {
      callsCounter++;

      if (callsCounter > 3 && callsCounter % 2 === 0) {
        return 'Bzzz... Error!';
      }

      return firstNumber + secondNumber;
    };

    return addSecondNum;
  };

  return addFirstNum;
}

module.exports = makeRobotAccountant;
