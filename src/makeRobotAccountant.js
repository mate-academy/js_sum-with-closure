'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let count = 0;

  return (x) => (y) => {
    count++;

    if (count === 4) {
      return 'Bzzz... Error!';
    }

    return x + y;
  };
};

module.exports = makeRobotAccountant;
