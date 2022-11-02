'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let count = 0;

  return (num1) => {
    count++;

    if (count > 3 && count % 2 === 0) {
      return (num2) => 'Bzzz... Error!';
    }

    return (num2) => num2 + num1;
  };
}

module.exports = makeRobotAccountant;
