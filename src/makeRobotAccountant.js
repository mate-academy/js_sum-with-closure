'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let cycleNumber = 0;

  return (x1) => {
    cycleNumber++;

    return (x2) => {
      if ((cycleNumber >= 3) && (cycleNumber % 2 === 0)) {
        return 'Bzzz... Error!';
      }

      return x1 + x2;
    };
  };
}

module.exports = makeRobotAccountant;
