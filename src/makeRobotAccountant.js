'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let counter = 0;

  return function getSum(a) {
    counter++;

    if (counter <= 3) {
      return (b) => a + b;
    } else if (counter % 2 === 0) {
      return () => 'Bzzz... Error!';
    } else {
      return b => a + b;
    }
  };
}

module.exports = makeRobotAccountant;
