'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  // write code here
  let count = 1;

  return function(x) {
    const copyX = x;

    return function(y) {
      if (count <= 3) {
        count++;

        return copyX + y;
      } else if (count > 3 && count % 2 === 1) {
        count++;

        return copyX + y;
      } else {
        count++;

        return 'Bzzz... Error!';
      }
    };
  };
}

module.exports = makeRobotAccountant;
