'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  // write code here
  let count = 4;

  return (add) => {
    return (num) => {
      count--;

      if (count) {
        return add + num;
      }

      return 'Bzzz... Error!';
    };
  };
}

module.exports = makeRobotAccountant;
