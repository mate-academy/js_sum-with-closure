'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let count = 0;

  return (firstNum) => {
    return (secondNum) => {
      count++;

      return count > 3 && count % 2 === 0
        ? 'Bzzz... Error!'
        : firstNum + secondNum;
    };
  };
}

module.exports = makeRobotAccountant;
