'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let attempts = 0;

  return (firstNumber) => {
    return (secondNumber) => {
      attempts++;

      return (attempts <= 3 || attempts % 2 !== 0)
        ? firstNumber + secondNumber : 'Bzzz... Error!';
    };
  };
}

module.exports = makeRobotAccountant;
