'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let count = 1;

  return (x) => {
    return (y) => {
      count++;

      if (count > 3 && count % 2 === 1) {
        return 'Bzzz... Error!';
      }

      return x + y;
    };
  };
}

module.exports = makeRobotAccountant;
