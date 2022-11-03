'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let calls = 0;

  const getSum = (first) => {
    calls++;

    const result = (second) => calls <= 3 || calls % 2
      ? first + second
      : 'Bzzz... Error!';

    return result;
  };

  return getSum;
}

module.exports = makeRobotAccountant;
