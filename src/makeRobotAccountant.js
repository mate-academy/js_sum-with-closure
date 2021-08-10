'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let sumCallsCount = 0;

  return (a) => (b) => {
    sumCallsCount++;

    if (sumCallsCount > 3 && sumCallsCount % 2 === 0) {
      return 'Bzzz... Error!';
    }

    return a + b;
  };
}

module.exports = makeRobotAccountant;
