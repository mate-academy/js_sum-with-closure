'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let workCounter = 0;

  return (x) => {
    workCounter++;

    return (y) => {
      if (workCounter % 2 === 0 && workCounter > 3) {
        return 'Bzzz... Error!';
      }

      return x + y;
    };
  };
}

module.exports = makeRobotAccountant;
