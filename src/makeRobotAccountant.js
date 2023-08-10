'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let counter = 0;

  return function getSum(a) {
    counter++;

    if (counter % 2 === 0 && counter > 3) {
      return () => 'Bzzz... Error!';
    }

    return b => a + b;
  };
}

module.exports = makeRobotAccountant;
