'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let count = 0;

  return (x) => (y) => {
    if (count === 3) {
      count = 2;

      return 'Bzzz... Error!';
    };

    count++;

    return x + y;
  };
}

module.exports = makeRobotAccountant;
