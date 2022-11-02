'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let count = 0;

  const calculateSum = (b) => {
    count++;

    if (count > 3 && count % 2 === 0) {
      return (a) => 'Bzzz... Error!';
    }

    return (a) => a + b;
  };

  return calculateSum;
}

module.exports = makeRobotAccountant;
