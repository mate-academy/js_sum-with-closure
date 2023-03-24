'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let counter = 0;

  return (firstNum) => {
    counter++;

    return (secondNum) => {
      const sum = firstNum + secondNum;

      return counter >= 3 && counter % 2 === 0 ? 'Bzzz... Error!' : sum;
    };
  };
}

module.exports = makeRobotAccountant;
