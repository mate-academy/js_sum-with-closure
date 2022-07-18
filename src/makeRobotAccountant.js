'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let count = 0;

  return (firstValue) => {
    return (secondValue) => {
      count += 1;

      return count % 2 === 0 && count > 3
        ? 'Bzzz... Error!'
        : firstValue + secondValue;
    };
  };
}

module.exports = makeRobotAccountant;
