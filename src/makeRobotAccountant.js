'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let counts = 0;

  return mainNumber => {
    return additionalNumber => {
      counts++;

      if (counts < 4 || counts % 2 === 1) {
        return mainNumber + additionalNumber;
      } else {
        return 'Bzzz... Error!';
      }
    };
  };
}

module.exports = makeRobotAccountant;
