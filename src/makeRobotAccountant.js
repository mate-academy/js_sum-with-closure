'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let i = 0;

  return (a) => {
    return (b) => {
      if (i < 3 || i / 2 === Math.floor(i / 2)) {
        i++;

        return a + b;
      } else {
        i++;

        return 'Bzzz... Error!';
      }
    };
  };
}

module.exports = makeRobotAccountant;
