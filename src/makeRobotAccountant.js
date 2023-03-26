'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let callsCount = 0;

  return (firstValue) => {
    return (secondValue) => {
      callsCount++;

      return (callsCount > 3 && callsCount % 2 === 0)
        ? 'Bzzz... Error!'
        : firstValue + secondValue;
    };
  };
}

module.exports = makeRobotAccountant;
