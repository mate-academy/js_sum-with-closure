'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  // write code here
  let counter = 0;

  return function getSum(a) {
    return function(b) {
      counter++;

      if (counter <= 3 || counter % 2 !== 0) {
        return a + b;
      };

      return 'Bzzz... Error!';
    };
  };
}

module.exports = makeRobotAccountant;
