'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  // write code here
  let counter = 0;

  return function(x) {
    counter++;

    return function(y) {
      if (counter % 2 === 0 && counter >= 4) {
        return 'Bzzz... Error!';
      } else {
        return x + y;
      };
    };
  };
}

module.exports = makeRobotAccountant;