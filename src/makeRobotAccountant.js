'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  // write code here
  let counter = 0;
  const errorCheck = (firstNumber) => {
    counter++;

    const adding = (secondNumber) => {
      return counter <= 3 || counter % 2 !== 0
        ? firstNumber + secondNumber
        : 'Bzzz... Error!';
    };

    return adding;
  };

  return errorCheck;
}

module.exports = makeRobotAccountant;
