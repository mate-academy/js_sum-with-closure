'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  // write code here
  let counter = 0;

  return (a) => {
    return (b) => {
      ++counter;

      if (counter < 3) {
        return a + b;
      }

      return counter % 2 !== 0 ? a + b : 'Bzzz... Error!';
    };
  };
}

module.exports = makeRobotAccountant;
