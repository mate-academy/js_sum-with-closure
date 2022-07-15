'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let count = 0;

  return (num1) => {
    count++;

    return count > 2 && count % 2 === 0
      ? () => 'Bzzz... Error!'
      : (num2) => num1 + num2;
  };
}

module.exports = makeRobotAccountant;
