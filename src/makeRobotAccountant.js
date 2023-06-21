'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let operationsCount = 0;

  const robotAccountant = (a) => {
    operationsCount++;

    if (operationsCount > 3 && operationsCount % 2 === 0) {
      return () => 'Bzzz... Error!';
    }

    return (b) => a + b;
  };

  return robotAccountant;
}

module.exports = makeRobotAccountant;
