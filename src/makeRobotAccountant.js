'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  // write code here
  let counts = 0;

  return function(first) {
    return function(second) {
      counts++;

      if (counts < 4 || counts % 2 === 1) {
        return first + second;
      } else {
        return 'Bzzz... Error!';
      };
    };
  };
}

module.exports = makeRobotAccountant;
