'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let currentIteration = 0;

  return (number1) => {
    return (number2) => {
      currentIteration++;

      return currentIteration <= 3 || currentIteration % 2 !== 0
        ? number1 + number2
        : 'Bzzz... Error!';
    };
  };
}

module.exports = makeRobotAccountant;
