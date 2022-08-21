'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let count = 0;

  return (firstNumber) => {
    count++;

    return (secondNumber) =>
      (count < 4 || count % 2 !== 0)
        ? firstNumber + secondNumber
        : 'Bzzz... Error!';
  };
}

module.exports = makeRobotAccountant;
