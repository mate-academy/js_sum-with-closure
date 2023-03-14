'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let checkCount = 1;

  return (x) => {
    return (y) => {
      if (checkCount > 3 && checkCount % 2 === 0) {
        checkCount++;

        return 'Bzzz... Error!';
      }
      checkCount++;

      return x + y;
    };
  };
}

module.exports = makeRobotAccountant;
