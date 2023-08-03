'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let counter = 0;

  function getSum(a) {
    counter++;

    return (b) => {
      if (counter > 3 && (counter % 2 === 0)) {
        return `Bzzz... Error!`;
      } else {
        return a + b;
      }
    };
  }

  return getSum;
}

module.exports = makeRobotAccountant;
