'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let count = 0;

  return (numberX) => {
    return (numberY) => {
      count++;

      if (count > 3 && count % 2 === 0) {
        return 'Bzzz... Error!';
      }

      return numberX + numberY;
    };
  };
}

module.exports = makeRobotAccountant;
