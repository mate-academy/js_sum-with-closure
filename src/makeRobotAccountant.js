'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let count = 0;
  const errorMessage = 'Bzzz... Error!';

  const getSum = a => b => {
    count++;

    const sum = a + b;

    const limit = count <= 3;

    return limit || count % 2 !== 0 ? sum : errorMessage;
  };

  return getSum;
}

module.exports = makeRobotAccountant;
