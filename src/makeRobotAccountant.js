'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let count = 1;

  return (x) => (y) => {
    if (count % 2 === 0 && count > 3) {
      count++;

      return 'Bzzz... Error!';
    } else {
      count++;

      return x + y;
    }
  };
}

module.exports = makeRobotAccountant;
