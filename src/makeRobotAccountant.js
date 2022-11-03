'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let countEvenAndOdd = 0;

  return function(x) {
    return function(y) {
      countEvenAndOdd++;

      return countEvenAndOdd < 3 || countEvenAndOdd % 2 === 1
        ? x + y
        : 'Bzzz... Error!';
    };
  };
}

module.exports = makeRobotAccountant;
