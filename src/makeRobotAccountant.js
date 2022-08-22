'use strict';

/**
 *
 * @return {function}
 */
function makeRobotAccountant() {
  let callsCount = 0;

  const getSum = (numberToAdd1) => {
    callsCount++;

    return callsCount > 3 && callsCount % 2 === 0
      ? whyItMustBeFunction => 'Bzzz... Error!'
      : numberToAdd2 => numberToAdd1 + numberToAdd2;
  };

  return getSum;
}

module.exports = makeRobotAccountant;
