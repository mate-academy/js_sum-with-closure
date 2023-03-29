'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let counter = 0;

  return function(x) {
    return function(y) {
      counter++;

      if (counter < 4) {
        return x + y;
      } else if (counter % 2 !== 0) {
        return x + y;
      } else {
        return 'Bzzz... Error!';
      }
    };
  };
}
module.exports = makeRobotAccountant;
