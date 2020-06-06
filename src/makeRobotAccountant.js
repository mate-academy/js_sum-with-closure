'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let counter = 0;

  return function(a) {
    counter++;

    return function(b) {
      if (counter > 3 && counter % 2 === 0) {
        return 'Bzzz... Error!';
      } else {
        return a + b;
      }
    };
  };
}

module.exports = makeRobotAccountant;
