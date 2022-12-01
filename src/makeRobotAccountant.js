'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  // write code here
  let count = 0;

  return (x) => {
    count++;

    return (y) => {
      if (count < 3 || count % 2) {
        return x + y;
      } else {
        return 'Bzzz... Error!';
      }
    };
  };
}

module.exports = makeRobotAccountant;
