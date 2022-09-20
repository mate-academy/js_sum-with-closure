'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  // write code here
  let callCount = 0;

  return (firstValue) => {
    callCount++;

    const condition = !(callCount % 2) && callCount > 3;

    return (secondValue) => (
      condition
        ? 'Bzzz... Error!'
        : firstValue + secondValue
    );
  };
}

module.exports = makeRobotAccountant;
