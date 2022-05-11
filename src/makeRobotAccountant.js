'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let count = 0;

  return (firstValue) => {
    count++;

    return (secondValue) => {
      return count > 3 && count % 2 === 0
        ? 'Bzzz... Error!'
        : firstValue + secondValue;
    };
  };
}

module.exports = makeRobotAccountant;
