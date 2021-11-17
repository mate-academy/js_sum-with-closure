'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let count = 0;

  return function getSum(x) {
    count++;

    return function(y) {
      if (count <= 3 || count % 2 !== 0) {
        return x + y;
      } else {
        return `Bzzz... Error!`;
      }
    };
  };
}

module.exports = makeRobotAccountant;
