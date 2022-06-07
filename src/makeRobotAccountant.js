'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let count = 0;

  return function(numOne) {
    count++;

    return function(numTwo) {
      if (count <= 3 || count % 2 !== 0) {
        return numOne + numTwo;
      }

      return 'Bzzz... Error!';
    };
  };
}

module.exports = makeRobotAccountant;
