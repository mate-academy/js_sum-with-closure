'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let counter = 1;

  return function(x) {
    return function(y) {
      counter++;

      if (counter > 3 && counter % 2 === 0) {
        return 'Bzzz... Error!';
      }
      counter++;

      return x + y;
    };
  };
}

module.exports = makeRobotAccountant;
