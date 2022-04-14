'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let counter = 0;

  return function(numberOne) {
    return function(numberTwo) {
      const currentCount = counter;

      counter++;

      if (currentCount === 3) {
        counter = 0;

        return 'Bzzz... Error!';
      }

      return numberOne + numberTwo;
    };
  };
}

module.exports = makeRobotAccountant;
