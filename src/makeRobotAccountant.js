'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let count = 0;

  return function(multiplierOne) {
    count++;

    return (multiplierTwo) => count > 3 && count % 2 === 0
      ? `Bzzz... Error!`
      : multiplierOne + multiplierTwo;
  };
}

module.exports = makeRobotAccountant;
