'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let counter = 0;
  let countAfterThree = 0;

  return function getSum(a) {
    if (counter !== 3) {
      counter++;

      return (b) => a + b;
    }

    if (countAfterThree === 0) {
      countAfterThree++;

      return () => 'Bzzz... Error!';
    } else {
      countAfterThree = 0;

      return b => a + b;
    }
  };
}

module.exports = makeRobotAccountant;
