'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let counter = 0;

  return function getSum(a) {
    counter += 1;

    if (counter % 2 === 0 && counter > 3) {
      return function getError() {
        return 'Bzzz... Error!';
      };
    }

    return function getSum2(b) {
      return a + b;
    };
  };
}

module.exports = makeRobotAccountant;
