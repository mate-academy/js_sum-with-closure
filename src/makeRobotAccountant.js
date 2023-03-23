'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  // write code here
  let count = 0;

  return (a) => {
    return (b) => {
      const summ = a + b;

      count++;

      if (count < 3) {
        return summ;
      } else {
        return count % 2 === 0
          ? 'Bzzz... Error!'
          : summ;
      }
    };
  };
}

module.exports = makeRobotAccountant;
