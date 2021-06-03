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

    if (limit <= 3 && limit % 2 !== 0) {
      return y => x + y;
    }

    return () => ('Bzzz... Error!');
  };
}

module.exports = makeRobotAccountant;
