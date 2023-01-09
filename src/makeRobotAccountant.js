'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let count = 0;

  return (firstNumber) => {
    return (secondNumber) => {
      count++;

      return (count <= 3 || count % 2 !== 0)
        ? firstNumber + secondNumber
        : 'Bzzz... Error!';
    };
  };
}

module.exports = makeRobotAccountant;
