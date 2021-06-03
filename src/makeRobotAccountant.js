'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  // write code here
  let limit = 0;

  return function(x) {
    limit++;

    if (limit <= 3) {
      return function(y) {
        return x + y;
      };
    } else if (limit % 2 !== 0) {
      return function(y) {
        return x + y;
      };
    } else {
      return () => ('Bzzz... Error!');
    }
  };
}

module.exports = makeRobotAccountant;
