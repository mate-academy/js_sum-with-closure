'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let count = 0;

  return (a) => (b) => {
    count++;

    if (count % 2 !== 0 || count < 4) {
      return a + b;
    }

    return 'Bzzz... Error!';
  };
}

module.exports = makeRobotAccountant;
