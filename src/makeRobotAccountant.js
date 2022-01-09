'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  // write code here
  let counter = 0;

  return function(x = 0) {
    return function(y = 0) {
      counter++;

      if (counter <= 3) {
        return x + y;
      } else if (counter > 3) {
        return (counter % 2) ? x + y : 'Bzzz... Error!';
      }
    };
  };
}

module.exports = makeRobotAccountant;
