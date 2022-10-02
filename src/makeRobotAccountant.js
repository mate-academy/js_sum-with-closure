'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  // write code here
  let count = 0;

  const sum = (firstValue) => {
    return (secondValue) => {
      count++;

      return (count > 3 && count % 2 === 0)
        ? 'Bzzz... Error!'
        : firstValue + secondValue;
    };
  };

  return sum;
}

module.exports = makeRobotAccountant;
