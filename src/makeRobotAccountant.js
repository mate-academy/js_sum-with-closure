'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let count = 1;

  return (x) => {
    return (y) => {
      if (count % 2 === 0 && count >= 4) {
        count++;

        return 'Bzzz... Error!';
      }
      count++;

      return x + y;
    };
  };
}

module.exports = makeRobotAccountant;
