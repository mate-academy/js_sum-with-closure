'use strict';

/**
 *
 * @return {function}
 */
function makeRobotAccountant() {
  let count = 1;
  // write code here

  return function(x) {
    return function(y) {
      if (count % 2 === 0 && count !== 0 && count > 3) {
        count++;

        return 'Bzzz... Error!';
      }
      count++;

      return x + y;
    };
  };
}

module.exports = makeRobotAccountant;
