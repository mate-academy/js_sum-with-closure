'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let counter = 1;

  return function(a) {
    return function(b) {
      if (counter > 3 && counter % 2 === 0) {
        counter++;

        return 'Bzzz... Error!';
      } else {
        counter++;

        return a + b;
      }
    };
  };
}

module.exports = makeRobotAccountant;
