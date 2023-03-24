'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let timesCalled = 0;
  let firstAddendum = null;

  const robotAccountant = (number) => {
    if (firstAddendum !== null) {
      const sum = firstAddendum + number;

      firstAddendum = null;
      timesCalled++;

      return timesCalled <= 3 || timesCalled % 2
        ? sum
        : 'Bzzz... Error!';
    }

    firstAddendum = number;

    return robotAccountant;
  };

  return robotAccountant;
}

module.exports = makeRobotAccountant;
