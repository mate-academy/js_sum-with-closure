'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let call = 0;

  return function(fistNumber) {
    return function(secondNumber) {
      call++;

      if (call > 3 && call % 2 === 0) {
        return 'Bzzz... Error!';
      }

      return fistNumber + secondNumber;
    };
  };
}

module.exports = makeRobotAccountant;
