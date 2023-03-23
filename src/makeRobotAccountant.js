'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let countOfAdding = 0;

  return (firstDigit) => {
    return (secondDigit) => {
      const sum = firstDigit + secondDigit;

      countOfAdding++;

      return (countOfAdding < 4 || countOfAdding % 2 === 1)
        ? sum
        : 'Bzzz... Error!';
    };
  };
}

module.exports = makeRobotAccountant;
