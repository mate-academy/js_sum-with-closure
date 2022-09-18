'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let count = 0;

  return (a) => {
    return (b) => {
      if (count >= 3 && count % 2 === 1) {
        count++;

        return 'Bzzz... Error!';
      }

      count++;

      return a + b;
    };
  };
}

module.exports = makeRobotAccountant;
