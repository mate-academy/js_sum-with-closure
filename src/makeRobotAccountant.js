'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let call = 0;
  const WORK_FINE_CALLS = 3;

  function getSum(firstOperator) {
    call++;

    return (secondOperator) => (call > WORK_FINE_CALLS && call % 2 === 0)
      ? 'Bzzz... Error!'
      : firstOperator + secondOperator;
  };

  return getSum;
}

module.exports = makeRobotAccountant;
