'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let calls = 0;
  const callsLimit = 3;

  const getSum = (firstValue) => {
    calls++;

    const trowError = (calls <= callsLimit)
      ? false
      : calls % 2 === 0;

    return trowError
      ? () => 'Bzzz... Error!'
      : secondValue => firstValue + secondValue;
  };

  return getSum;
}

module.exports = makeRobotAccountant;
