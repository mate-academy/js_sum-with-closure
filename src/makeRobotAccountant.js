'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let count = 0;

  return (x) => (y) => {
    const sum = x + y;

    count++;

    if (count > 3 && count % 2 === 0) {
      return 'Bzzz... Error!';
    }

    return sum;
  };
}

module.exports = makeRobotAccountant;
