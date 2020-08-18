'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let i = 0;

  return (a) => {
    return (b) => {
      i++;

      if (i - 1 < 3 || (i - 1) % 2 === 0) {
        return a + b;
      } else {
        return 'Bzzz... Error!';
      }
    };
  };
}

module.exports = makeRobotAccountant;
