'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  // write code here
  let count = 0;

  return (b) => {
    return (c) => {
      if (count === 3) {
        count = 0;

        return 'Bzzz... Error!';
      }

      count++;

      return b + c;
    };
  };
}

module.exports = makeRobotAccountant;
