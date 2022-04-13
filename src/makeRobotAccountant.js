'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let number = 0;

  return function(a) {
    return function(b) {
      number++;

      if (number <= 3 || (number % 2) === 1) {
        return a + b;
      } else {
        return 'Bzzz... Error!';
      }
    };
  };
};

module.exports = makeRobotAccountant;
