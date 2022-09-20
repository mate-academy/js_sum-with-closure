'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  // write code here
  let count = 0;

  return (firstValue) => {
    count++;

    const condition = !(count % 2) && count > 3;

    return (secondValue) => (
      condition
        ? 'Bzzz... Error!'
        : firstValue + secondValue
    );
  };
}

module.exports = makeRobotAccountant;
