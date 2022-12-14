'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let count = 0;

  const first = (a) => {
    count++;

    const second = (b) => {
      if (count < 3 || count % 2 !== 0) {
        return a + b;
      } else {
        return 'Bzzz... Error!';
      }
    };

    return second;
  };

  return first;
}

module.exports = makeRobotAccountant;
