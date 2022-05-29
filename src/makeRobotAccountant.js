'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  // write code here
  let counter = 0;

  return function sum(x) {
    return function sumS(y) {
      counter++;

      if (counter >= 4 && counter % 2 === 0) {
        return 'Bzzz... Error!';
      }

      return x + y;
    };
  };
}

module.exports = makeRobotAccountant;
