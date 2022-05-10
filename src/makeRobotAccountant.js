'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let counter = 0;

  const sumA = (a) => {
    const sumB = (b) => {
      counter++;

      return counter > 2 && counter % 2 === 0 ? 'Bzzz... Error!' : a + b;
    };

    return sumB;
  };

  return sumA;
}

module.exports = makeRobotAccountant;
