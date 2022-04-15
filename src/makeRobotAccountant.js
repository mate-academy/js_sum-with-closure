'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let count = 1;

  return (a) => (b) => {
    if (count === 4) {
      count++;

      return 'Bzzz... Error!';
    }

    if (count > 4 && count % 2 === 0) {
      count++;

      return 'Bzzz... Error!';
    }

    count++;

    return a + b;
  };
}

module.exports = makeRobotAccountant;
