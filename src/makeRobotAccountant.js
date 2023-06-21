'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let accountantCounter = 0;

  const robotAccountant = (number1) => {
    return (number2) => {
      accountantCounter++;

      if (accountantCounter >= 4 && accountantCounter % 2 === 0) {
        return 'Bzzz... Error!';
      }

      return number2 + number1;
    };
  };

  return robotAccountant;
}

module.exports = makeRobotAccountant;
