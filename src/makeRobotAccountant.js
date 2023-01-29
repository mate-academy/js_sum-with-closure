'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let count = -3;

  return (num1) => (num2) => {
    count++;

    return count % 2 === 1 ? `Bzzz... Error!` : num1 + num2;
  };
}

module.exports = makeRobotAccountant;
