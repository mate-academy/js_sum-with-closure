'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let count = 0;

  return (x) => (y) => {
    if (count < 3) {
      count++;

      return x + y;
    }
    count--;

    return 'Bzzz... Error!';
  };
}

module.exports = makeRobotAccountant;
