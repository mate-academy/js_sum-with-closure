'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let malfunctionCounter = 0;

  return (numberOne) => {
    return (numberTwo) => {
      malfunctionCounter++;

      if (malfunctionCounter > 3 && malfunctionCounter % 2 === 0) {
        return 'Bzzz... Error!';
      }

      return numberOne + numberTwo;
    };
  };
}

module.exports = makeRobotAccountant;
