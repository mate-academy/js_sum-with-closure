'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  // write code here
  let count = 0;// 1,2,3

  return function(a) {
    return function(b) {
      if (count < 3 || count % 2 === 0) {
        count++;

        return a + b;
      } else {
        count++;

        return 'Bzzz... Error!';
      }
    };
  };
};

module.exports = makeRobotAccountant;
