'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let count = 1;

  return (x) => {
    return (y) => {
      if (count <= 3 || (count % 2) !== 0) {
        count++;

        return x + y;
      }

      count++;

      return 'Bzzz... Error!';
    };
  };
}

module.exports = makeRobotAccountant;
