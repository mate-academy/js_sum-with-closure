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

      if (count <= 3 || (count % 2) !== 0) {
        return x + y;
      };

      return 'Bzzz... Error!';
    };
  };
}

module.exports = makeRobotAccountant;
