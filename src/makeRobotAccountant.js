'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  // write code here
  let count = 0;

  return (x) => {
    return (y) => {
      count++;

      if (count < 4) {
        return x + y;
      } else if (count >= 4) {
        count = count % 2 === 0;

        return 'Bzzz... Error!';
      }
    };
  };
}

module.exports = makeRobotAccountant;
