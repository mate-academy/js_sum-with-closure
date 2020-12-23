'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let count = 0;

  return (x) => {
    return (y) => {
      count++;

      if (count >= 4 && x % 3 !== 0 && y % 3 !== 0) {
        return 'Bzzz... Error!';
      }

      return (x) + (y);
    };
  };
}

module.exports = makeRobotAccountant;
