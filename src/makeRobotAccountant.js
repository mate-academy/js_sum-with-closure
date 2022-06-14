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

    return (calls > callsLimit && calls % 2 === 0)
      ? () => 'Bzzz... Error!'
      : secondValue => firstValue + secondValue;
  };

  return getSum;
}

module.exports = makeRobotAccountant;
