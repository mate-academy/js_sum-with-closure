'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let count = -2;

  return a => {
    return b => {
      if (count > 0 && count % 2) {
        count++;

        return 'Bzzz... Error!';
      }

      count++;

      return a + b;
    };
  };
}

module.exports = makeRobotAccountant;
