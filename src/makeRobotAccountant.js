'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let callCount = 0;

  return (valueX) => {
    callCount++;

    return (valueY) => {
      return callCount > 3 && callCount % 2 === 0
        ? 'Bzzz... Error!'
        : valueX + valueY;
    };
  };
}

module.exports = makeRobotAccountant;
