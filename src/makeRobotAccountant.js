'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  // write code here
  let count = 1;

  return (x) => {
    return (y) => {
      if (count > 3 && count % 2 === 0) {
        count++;

        return 'Bzzz... Error!';
      }
      count++;

      return x + y;
    };
  };
}

module.exports = makeRobotAccountant;
