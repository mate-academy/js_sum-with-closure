'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let count = 0;

  return (a) => (b) => {
    count++;

    if (count < 4) {
      return a + b;
    }

    return count % 2 !== 0 ? a + b : 'Bzzz... Error!';
  };
}

module.exports = makeRobotAccountant;
