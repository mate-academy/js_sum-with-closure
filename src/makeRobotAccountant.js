'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let sumCount = 0;

  return (firstNum) => {
    sumCount++;

    return (secondNum) => {
      return sumCount > 3 && sumCount % 2 === 0
        ? 'Bzzz... Error!'
        : firstNum + secondNum;
    };
  };
}

module.exports = makeRobotAccountant;
