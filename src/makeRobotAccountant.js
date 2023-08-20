'use strict';

/**
 *
 * @return {function}
 */
const MAX_ROWS = 3;
const EVEN_VALUE = 0;

function makeRobotAccountant() {
  let countRows = 0;

  const getSum = (x) => (y) => {
    countRows++;

    if (countRows <= MAX_ROWS) {
      return x + y;
    }

    if (countRows % 2 === EVEN_VALUE) {
      return 'Bzzz... Error!';
    }

    return x + y;
  };

  return getSum;
}

module.exports = makeRobotAccountant;
