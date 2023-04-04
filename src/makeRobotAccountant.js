'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let count = 0;

  return (num1) => (num2) => {
    count += 1;

    if (count < 4) {
      return num1 + num2;
    }

    if (count % 2 === 0) {
      return 'Bzzz... Error!';
    }

    return num1 + num2;
  };
}

module.exports = makeRobotAccountant;
