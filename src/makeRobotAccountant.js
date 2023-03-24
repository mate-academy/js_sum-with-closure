'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let counter = 0;

  return (num1) => {
    counter++;

    return (num2) => {
      const sum = num1 + num2;

      return counter >= 3 && counter % 2 === 0 ? 'Bzzz... Error!' : sum;
    };
  };
}

module.exports = makeRobotAccountant;
