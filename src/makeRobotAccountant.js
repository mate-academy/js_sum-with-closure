'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let count = 0;

  const addSum = (number) => {
    count++;

    if (count > 3 && count % 2 === 0) {
      return () => 'Bzzz... Error!';
    }

    return (nextNumber) => nextNumber + number;
  };

  return addSum;
}

module.exports = makeRobotAccountant;
