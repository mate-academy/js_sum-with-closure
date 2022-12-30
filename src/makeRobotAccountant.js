'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let count = 3;

  return (x) => {
    return (y) => {
      if (!count) {
        count++;

        return 'Bzzz... Error!';
      }
      count--;

      return x + y;
    };
  };
}

module.exports = makeRobotAccountant;
