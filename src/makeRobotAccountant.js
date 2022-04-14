'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let counter = 0;

  return (x) => {
    const newCounter = counter;

    counter++;

    return (y) => {
      if (newCounter >= 3) {
        return newCounter % 2 === 0 ? x + y : 'Bzzz... Error!';
      }

      return x + y;
    };
  };
}

module.exports = makeRobotAccountant;
